import React, { Component } from 'react'
import contact from '../../images/contact.jpg';
import './Contact.scss';
import MessageService from '../../services/message-service';

export default class Contact extends Component {
    static service = new MessageService();

    constructor(props) {
        super(props);
        
        this.state ={
            name: '',
            phone: '',
            submitted: false,
            email: '',
            message: '',
            errors: {}

        }
    }

    errorValidation = () => {
        const { 
            name, 
            phone, 
            email, 
            message
        } = this.state;
        
        let errors = {};
        let formIsValid = true;


        if(!name){
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }

        if(typeof name !== "undefined"){
            if(!name.match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               errors["name"] = "Only letters";
            }        
        }

        if(!email){
            formIsValid = false;
            errors["email"] = "Cannot be empty";
         }
         
 
         if(typeof email !== "undefined"){
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');
 
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
               formIsValid = false;
               errors["email"] = "Email is not valid";
             }
        }

        if(!phone){
            formIsValid = false;
            errors["phone"] = "Cannot be empty";
        }

        if(!message){
            formIsValid = false;
            errors["message"] = "Cannot be empty";
         }

        this.setState({errors: errors});
        
        return formIsValid;
    }

    onSubmit = (event) => {
        event.preventDefault();

        if(this.errorValidation()){
            Contact.service.sendMail(this.state)
                .then((data) => {
                    this.setState({
                        submitted: true,
                        name: '',
                        email: '',
                        phone: '',
                        message: ''
                    })
                }).catch((error) => {
                    this.setState({
                        submitted: false
                    });
                })
        }

    }

    setValue = ({target}) => {
        this.setState({
            [target.name]: target.value
        });
    }

    render() {
        const backgroundImage = {
            'backgroundImage': `url(${contact})`
        }

        return (
            <section id='section-5' style={backgroundImage} className='section-contact'>
                <div className="container">
                    <div className="section__head section--header-underline">
                        <h1 className='section__title'>
                            Contact
                        </h1>
                    </div>
                    
                    <div className="section__body">
                        <div className="contact">
                            <div className="contact__aside">
                                <h2 className="contact__title">
                                    Address Information
                                </h2>
                                
                                <ul className="list-contacts">
                                    <li>
                                        <p>
                                            <svg className='ico-phone' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                            </svg>

                                            <strong className='list-contacts-title'>
                                                Phone
                                            </strong>
                                        </p>
                                        
                                        <a href='tel:0833617736'>
                                            0833617736
                                        </a>
                                    </li>

                                    <li>
                                        <p>
                                            <svg className='ico-email' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/><path d="M0 0h24v24H0z" fill="none"/>
                                            </svg>

                                            <strong className='list-contacts-title'>
                                                Email
                                            </strong>
                                        </p>
                                        
                                        <a href='mailto:emil_georgiev_it@abv.bg'>
                                            emil_georgiev_it@abv.bg
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="contact__content">
                                <form className='contact-form'>
                                    <div className="form__head">
                                        <h2 className="form__title">
                                            Get in Touch
                                        </h2>
                                    </div>

                                    <div className="form__body">
                                        <div className="form__control">
                                            <input className='form__input' type="text" onChange={this.setValue} name='name' placeholder='Your Name'/>
                                            
                                            <span className='contact-error'>
                                                {this.state.errors['name']}
                                            </span>
                                        </div>

                                        <div className="form__control">
                                            <input className='form__input' type="email" name='email' onChange={this.setValue} placeholder='Your Email'/>
                                            
                                            <span className='contact-error'>
                                                {this.state.errors['email']}
                                            </span>
                                        </div>

                                        <div className="form__control">
                                            <input className='form__input' type="text" name='phone' onChange={this.setValue} placeholder='Your Phone'/>
                                            
                                            <span className='contact-error'>
                                                {this.state.errors['phone']}
                                            </span>
                                        </div>

                                        <div className="form__control">
                                            <textarea className='form__input form__textarea' name="message" id="message" placeholder='Your Message' cols="30" rows="10">

                                            </textarea>

                                            <span className='contact-error'>
                                                {this.state.errors['message']}
                                            </span>
                                        </div>
                                        {
                                            this.state.submitted ?

                                            <div className="form__control">
                                                   <span className='contact-error'>
                                                        Message sent successfully !
                                                    </span> 
                                            </div> : ''
                                        
                                        }
                                        
                                        <div className="form__actions">
                                            <button className='btn-submit'>
                                                Send Message
                                            </button>
                                        </div>
                                    </div>                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

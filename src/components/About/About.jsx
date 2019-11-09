import React, { Fragment } from 'react'
import './About.scss';
import about from '../../images/about.jpg';


const About = () => {
    const backgroundImage = {
        'backgroundImage': `url(${about})`
    }

    return (
        <Fragment>
            <section id='section-2' style={backgroundImage} className="section-about">
                <div className="container">
                    <div className="section__head section--header-underline">
                        <h2 className='section__title'>
                            About Me
                        </h2>
                    </div>
                    
                    <div className="section__body">
                        <div className="container container--small">
                            <div className="section__entry">
                                <p>
                                    Hello, I'm Emil. <br/>
                                    I'm a highly talented website developer with experience in building high quality modern and professional sites of various types ( company/organization website, landing page, blog, personal website, eCommerce store, portfolio website ). <br/>
                                    My knowledge includes: creating site, setting up and installing plugins, fixing bugs, expanding the functionality of the site. I can make a website from scratch or redesign and improve your existing site.
                                </p>
                            </div>
                            
                            <ul className="list-about">
                                <li>
                                    <p>
                                        <strong>
                                            Name:
                                        </strong>

                                        <span>
                                            Emil Georgiev
                                        </span>
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <strong>
                                            Email:
                                        </strong>

                                        <a href='mailto:emil_georgiev_it@abv.bg'>
                                            emil_georgiev_it@abv.bg
                                        </a>
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <strong>
                                            Address:
                                        </strong>

                                        <a href='https://www.google.com/maps/place/6+Carrig+Ct,+Fortunestown,+Dublin/data=!4m2!3m1!1s0x4867746724d90917:0x66baef66771ce998?sa=X&ved=2ahUKEwjlwcLE1dPlAhWxqHEKHRVNCT0Q8gEwAHoECBQQAQ'>
                                            6 Carrig Court, Fortunestown, Dublin
                                        </a>
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <strong>
                                            Phone:
                                        </strong>

                                        <a href='tel:0833617736'>
                                            083 361 7736
                                        </a>
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <strong>
                                            Date of birth:
                                        </strong>

                                        <span>
                                            6th August 1994
                                        </span>
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <strong>
                                            Nationality:
                                        </strong>

                                        <span>
                                            Bulgaria
                                        </span>
                                    </p>
                                </li>
                            </ul>
                            
                            <ul className="list-socials">
                                <li>
                                    <a href="https://www.linkedin.com/in/emil-georgiev-b5464bb9/" target='_blank'>
                                        <svg className='ico ico-linkedin' height="25px" viewBox="0 0 512 512" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"/>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.facebook.com/emil.georgiev.it" target='_blank'>
                                        <svg className='ico ico-facebook' height="25px" viewBox="0 0 512 512" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="m297.277344 508.667969c-2.132813.347656-4.273438.667969-6.421875.960937 2.148437-.292968 4.289062-.613281 6.421875-.960937zm0 0"/><path d="m302.398438 507.792969c-1.019532.1875-2.039063.359375-3.058594.535156 1.019531-.175781 2.039062-.347656 3.058594-.535156zm0 0"/><path d="m285.136719 510.339844c-2.496094.28125-5.007813.53125-7.527344.742187 2.519531-.210937 5.03125-.460937 7.527344-.742187zm0 0"/><path d="m290.054688 509.738281c-1.199219.160157-2.40625.308594-3.609376.449219 1.203126-.140625 2.410157-.289062 3.609376-.449219zm0 0"/><path d="m309.367188 506.410156c-.898438.191406-1.800782.382813-2.703126.566406.902344-.183593 1.804688-.375 2.703126-.566406zm0 0"/><path d="m326.664062 502.113281c-.726562.207031-1.453124.402344-2.179687.605469.726563-.203125 1.453125-.398438 2.179687-.605469zm0 0"/><path d="m321.433594 503.542969c-.789063.207031-1.582032.417969-2.375.617187.792968-.199218 1.585937-.40625 2.375-.617187zm0 0"/><path d="m314.589844 505.253906c-.835938.195313-1.679688.378906-2.523438.566406.84375-.1875 1.6875-.371093 2.523438-.566406zm0 0"/><path d="m277.527344 511.089844c-1.347656.113281-2.695313.214844-4.046875.304687 1.351562-.089843 2.699219-.191406 4.046875-.304687zm0 0"/><path d="m512 256c0-141.363281-114.636719-256-256-256s-256 114.636719-256 256 114.636719 256 256 256c1.503906 0 3-.03125 4.5-.058594v-199.285156h-55v-64.097656h55v-47.167969c0-54.703125 33.394531-84.476563 82.191406-84.476563 23.367188 0 43.453125 1.742188 49.308594 2.519532v57.171875h-33.648438c-26.546874 0-31.6875 12.617187-31.6875 31.128906v40.824219h63.476563l-8.273437 64.097656h-55.203126v189.453125c107.003907-30.675781 185.335938-129.257813 185.335938-246.109375zm0 0"/><path d="m272.914062 511.429688c-2.664062.171874-5.339843.308593-8.023437.398437 2.683594-.089844 5.359375-.226563 8.023437-.398437zm0 0"/><path d="m264.753906 511.835938c-1.414062.046874-2.832031.082031-4.25.105468 1.417969-.023437 2.835938-.058594 4.25-.105468zm0 0"/>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://github.com/EmilGeorgievIT" target='_blank'>
                                        <svg className='ico ico-github' id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            width="25px" height="25px" viewBox="0 0 35.318 35.318">
                                            <g>
                                                <path d="M23.71,34.689c-0.172,0.062-0.345,0.137-0.522,0.168c-0.678,0.121-1.112-0.229-1.116-0.922
                                                    c-0.009-1.287-0.009-2.572,0.012-3.859c0.022-1.48-0.012-2.941-1.139-4.162c0.67-0.12,1.266-0.204,1.849-0.338
                                                    c3.862-0.887,5.868-3.323,6.124-7.366c0.131-2.058-0.236-3.946-1.604-5.567c-0.099-0.114-0.104-0.373-0.057-0.539
                                                    c0.364-1.34,0.258-2.649-0.166-3.959c-0.105-0.327-0.279-0.428-0.602-0.407c-1.134,0.063-2.173,0.461-3.089,1.073
                                                    c-0.883,0.593-1.705,0.722-2.754,0.482c-2.31-0.521-4.635-0.369-6.94,0.165c-0.261,0.062-0.612-0.021-0.851-0.161
                                                    c-1.082-0.634-2.164-1.25-3.412-1.496c-0.965-0.188-1.049-0.14-1.305,0.793C7.816,9.77,7.784,10.947,8.113,12.13
                                                    c0.047,0.172-0.002,0.448-0.117,0.575c-2.557,2.853-1.631,8.244,0.092,10.309c1.34,1.604,3.12,2.326,5.096,2.701
                                                    c0.345,0.064,0.688,0.113,1.033,0.173c-0.296,0.77-0.562,1.497-0.863,2.212c-0.059,0.138-0.246,0.254-0.399,0.312
                                                    c-1.938,0.752-3.604,0.199-4.713-1.56c-0.593-0.938-1.354-1.639-2.488-1.842c-0.036-0.007-0.073-0.026-0.106-0.021
                                                    c-0.305,0.08-0.607,0.164-0.911,0.246c0.171,0.238,0.292,0.558,0.521,0.701c0.961,0.608,1.586,1.475,1.999,2.498
                                                    c0.649,1.604,1.909,2.319,3.546,2.459c0.799,0.065,1.606,0.01,2.481,0.01c0,0.996,0.036,2.133-0.015,3.265
                                                    c-0.026,0.61-0.639,0.854-1.373,0.604c-1.947-0.666-3.752-1.621-5.311-2.963C0.956,26.96-1.214,20.83,0.657,13.655
                                                    C2.522,6.503,7.383,2.116,14.651,0.739C24.708-1.163,34.235,6.161,35.233,16.37C36.021,24.418,31.284,31.949,23.71,34.689z
                                                    M14.229,25.85c-0.006,0.014-0.01,0.024-0.016,0.038c0.018,0.003,0.036,0.006,0.055,0.009
                                                    C14.282,25.898,14.294,25.923,14.229,25.85z M9.679,29.031c0.157,0.097,0.307,0.22,0.477,0.273c0.062,0.02,0.177-0.121,0.38-0.271
                                                    c-0.282-0.107-0.448-0.201-0.623-0.225C9.845,28.8,9.757,28.953,9.679,29.031z M11.112,29.277c0.023,0.105,0.232,0.236,0.355,0.234
                                                    c0.119-0.002,0.235-0.16,0.354-0.25c-0.108-0.099-0.216-0.195-0.548-0.494C11.201,28.975,11.082,29.143,11.112,29.277z
                                                    M12.87,28.854c-0.148,0.035-0.273,0.172-0.408,0.266c0.079,0.1,0.158,0.193,0.285,0.35c0.175-0.16,0.294-0.271,0.414-0.379
                                                    C13.061,29.004,12.944,28.836,12.87,28.854z M8.512,28.261c0.082,0.155,0.209,0.289,0.381,0.508
                                                    c0.115-0.188,0.24-0.332,0.218-0.361c-0.109-0.143-0.257-0.26-0.403-0.367C8.698,28.033,8.495,28.227,8.512,28.261z"/>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default About;
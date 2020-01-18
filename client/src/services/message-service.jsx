import { post, get } from '../rest/rest';

const API_SERVER = `${process.env.REACT_APP_API_SERVER}`;

class MessageService {
    sendMail(message) {
        return post(API_SERVER, + '/mail', message);
    }
}
export default MessageService;
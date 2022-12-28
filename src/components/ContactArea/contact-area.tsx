import './contact-area.css';
import { Container } from '../container';

const AstronautaImage = require("../../assets/images/astronauta.png") as string;

const ContactArea = () => {
    return (
        <div className="contact-area">
            <Container>
                <div className='contact-area-content'>
                    <div className='contact-area-left'>
                        <h1>Get in Touch</h1>
                        <form>
                            <fieldset>
                                <div className='campo'>
                                    <input type='text' id ='name' name='name' placeholder='Your name'/>
                                </div>
                                <div className='campo'>
                                    <input type='email' id='email' name='email' placeholder='E-mail address'/> 
                                </div>
                            </fieldset>
                            <input type='text' id='subject' placeholder='Subject'/> 
                            <textarea placeholder='Message'/>
                            <input type='submit' value='Send Message' />
                        </form>
                    </div>
                    <div className='contact-area-right'>
                        <img src={AstronautaImage} alt='astronauta-image' />
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default ContactArea;
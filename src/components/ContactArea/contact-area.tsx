import './contact-area.css';
import { useState } from 'react';
import { Container } from '../container';
import emailjs from '@emailjs/browser';

const AstronautaImage = require("../../assets/images/astronauta.png") as string;

const ContactArea = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const templateParams = {
        from_name: name,
        message: message,
        email: email
    }

    const sendEmail = (e : any) => {
        e.preventDefault();

        if (email === '' || name === '' || subject === '' || message === '') {
            alert('All fields are required');
            return
        }

        emailjs.send("service_mo0ogsg", "template_u3zvgap", templateParams, "812tj0566nGOA074L")
        .then((res) => {
            console.log('EMAIL ENVIADO!', res.status, res.text);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }, (error) => {
            console.log('ERRO', error);
        });
    };

    return (
        <div className="contact-area">
            <Container>
                <div className='contact-area-content'>
                    <div className='contact-area-left'>
                        <h1>Get in Touch</h1>

                        <form onSubmit={sendEmail}>
                            <fieldset>
                                <div className='campo'>
                                    <input 
                                        type='text' 
                                        id ='name' 
                                        name='name' 
                                        placeholder='Your name'
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                    />
                                </div>
                                <div className='campo'>
                                    <input 
                                        type='email' 
                                        id='email' 
                                        name='email' 
                                        placeholder='E-mail address'
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    /> 
                                </div>
                            </fieldset>

                            <input 
                                type='text' 
                                id='subject' 
                                placeholder='Subject'
                                onChange={(e) => setSubject(e.target.value)}
                                value={subject}
                            /> 

                            <textarea 
                                placeholder='Message'
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            />

                            <input 
                                type='submit' 
                                value='Send Message'
                            />
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
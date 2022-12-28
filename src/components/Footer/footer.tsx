import './footer.css';
import { Container } from '../container';

const linkedinIcon = require("../../assets/images/linkedin_icon.png") as string;
const gitHubIcon = require("../../assets/images/github_icon.png") as string;

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className='footer-content'>
                    <div className='footer-contact'>
                        <div className='author'>Development by Eduardo Rocha</div>
                        <div className='social'>
                            <a href='https://www.linkedin.com/in/eduardo-rocha-553486212/' target='_blank' className='social-icon'>
                                <img src={linkedinIcon} alt='linkedin-icon' />
                            </a>
                            <a href='https://github.com/eduardorocham' target='_blank' className='social-icon'>
                                <img src={gitHubIcon} alt='github-icon' />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
};

export default Footer;
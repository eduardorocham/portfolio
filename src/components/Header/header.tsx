import './header.css';
import { Container } from '../container';

const linkedinIcon = require("../../assets/images/linkedin_icon.png") as string;
const gitHubIcon = require("../../assets/images/github_icon.png") as string;

const Header = () => {
    const scrollHome = () => {
        window.scrollTo(0, 0);
    };

    const scrollSkills = () => {
        window.scrollTo(0, 680);
    };

    const scrollProjects = () => {
        window.scrollTo(0, 1250);
    };

    return (
        <header>
            <Container>
                <div className='header-content'>
                    <div className="logo">
                        <span>MY</span>PORTFOLIO
                    </div>
                    <nav>
                        <ul>
                            <li onClick={scrollHome}>Home</li>
                            <li onClick={scrollSkills}>Skills</li>
                            <li onClick={scrollProjects}>Projects</li>
                        </ul>
                    </nav>
                    <div className='social'>
                        <a href='https://www.linkedin.com/in/eduardo-rocha-553486212/' target='_blank' className='social-icon'>
                            <img src={linkedinIcon} alt='linkedin-icon' />
                        </a>
                        <a href='https://github.com/eduardorocham' target='_blank' className='social-icon'>
                            <img src={gitHubIcon} alt='github-icon' />
                        </a>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;
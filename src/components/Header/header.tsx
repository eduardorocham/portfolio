import './header.css';

const linkedinIcon = require("../../assets/images/linkedin_icon.png") as string;
const gitHubIcon = require("../../assets/images/github_icon.png") as string;

const Header = () => {
    return (
        <header>
            <div className="logo">LOGO</div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Projects</li>
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
        </header>
    )
}

export default Header;
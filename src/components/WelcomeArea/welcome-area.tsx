import './welcome-area.css';

const avatar = require("../../assets/images/avatar.png") as string;

const WelcomeArea = () => {
    return (
        <div className='welcome-area--perfil'>
            <div className='welcome-area--avatar'>
              <img src={avatar} alt='avatar'/>
            </div>
            <h2>Hi! I'm Eduardo <br /> Web Developer</h2>
            <div className='welcome-div'>
              Welcome to my Portfolio
            </div>
        </div>
    )
}

export default WelcomeArea;
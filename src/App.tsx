import React from 'react';
import './App.css';

import Header from './components/header';

const avatar = require("./assets/images/avatar.png") as string;

function App() {
  return (
    <div className="App">
      <div className='welcome-area'>
        <div className='container'>
          <Header />
          <div className='welcome-area--perfil'>
            <div className='welcome-area--avatar'>
              <img src={avatar} alt='avatar'/>
            </div>
            <h2>Hi! I'm Eduardo <br /> Web Developer</h2>
            <div className='welcome-div'>
              Welcome to my Portfolio
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

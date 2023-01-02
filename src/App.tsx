import React, { useState, useEffect } from 'react';
import './App.css';

import { Container } from './components/container';
import Header from './components/Header/header';
import WelcomeArea from './components/WelcomeArea/welcome-area';
import SkillsArea from './components/SkillsArea/skills-area';
import ProjectArea from './components/ProjectsArea/project-area';
import ContactArea from './components/ContactArea/contact-area';
import Footer from './components/Footer/footer';

function App() {
  const [changeColor, setChangeColor] = useState(false);

  useEffect(() => {
    const scrollPosition = () => {
      window.scrollY > 10 ?  setChangeColor(true) : setChangeColor(false);
    };

    window.addEventListener('scroll', scrollPosition);
  }, []);

  return (
    <div className="App">
      <div className='welcome-area'>
        <Header action={changeColor}/>
        <Container>
          <WelcomeArea />
        </Container>
      </div>
      <SkillsArea />
      <ProjectArea />
      <ContactArea />
      <Footer />
    </div>
  );
}

export default App;

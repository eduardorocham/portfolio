import React from 'react';
import './App.css';

import { Container } from './components/container';
import Header from './components/Header/header';
import WelcomeArea from './components/WelcomeArea/welcome-area';
import SkillsArea from './components/SkillsArea/skills-area';
import ProjectArea from './components/ProjectsArea/project-area';

function App() {
  return (
    <div className="App">
      <div className='welcome-area'>
        <Container>
          <Header />
          <WelcomeArea />
        </Container>
      </div>
      <SkillsArea />
      <ProjectArea />
    </div>
  );
}

export default App;

import './skills-area.css';
import { Container } from '../container';

const ReactLogo = require("../../assets/images/logo-react.png") as string;
const JavascriptLogo = require("../../assets/images/logo-javascript.png") as string;
const CssLogo = require("../../assets/images/logo-css.png") as string;
const TypescriptLogo = require("../../assets/images/logo-typescript.png") as string;
const NodeLogo = require("../../assets/images/logo-node.png") as string;
const HTMLLogo = require("../../assets/images/logo-html.png") as string;

const SkillsArea = () => {
    return (
        <div className='skills-area'>
            <Container>
                <div className='skills-area--banner'>
                    <h2>Skills</h2>
                    <p>These are some technologies I know:</p>
                    <div className='technologies'>
                        <div className='technology'>
                            <img src={ReactLogo} alt='react-logo' />
                            <div className='technology-name'>
                                ReactJs
                            </div>
                        </div>
                        <div className='technology'>
                            <img src={JavascriptLogo} alt='javascript-logo' />
                            <div className='technology-name'>
                                Javascript
                            </div>
                        </div>
                        <div className='technology'>
                            <img src={TypescriptLogo} alt='typescript-logo' />
                            <div className='technology-name'>
                                Typescript
                            </div>
                        </div>
                        <div className='technology'>
                            <img src={HTMLLogo} alt='html-logo' />
                            <div className='technology-name'>
                                HTML
                            </div>
                        </div>
                        <div className='technology'>
                            <img src={CssLogo} alt='css-logo' />
                            <div className='technology-name'>
                                CSS
                            </div>
                        </div>
                        <div className='technology'>
                            <img src={NodeLogo} alt='node-logo' />
                            <div className='technology-name'>
                                NodeJs
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SkillsArea;
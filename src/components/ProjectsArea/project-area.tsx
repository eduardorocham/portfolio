import './project-area.css';
import { Container } from "../container";

const EcommerceImage = require("../../assets/images/e-commerce-project.png") as string;
const StarWarsImage = require("../../assets/images/star-wars-project.png") as string;
const PetshopImage = require("../../assets/images/petshop-project.png") as string;
const UrnaImage = require("../../assets/images/urna-eletronica-project.png") as string;
const MemoryGameImage = require("../../assets/images/memory-game-project.png") as string;
const CalcImcImage = require("../../assets/images/calc-imc-project.png") as string;

const ProjectArea = () => {
    return (
        <div className="projects-area">
            <Container>
                <div className='projects-area-content'>
                    <h1>Projects</h1>
                    <div className='projects'>
                        <img src={EcommerceImage} alt='e-commerce-image'/>
                        <img src={StarWarsImage} alt='star-wars-image' />
                        <img src={PetshopImage} alt='petshop-image' />
                        <img src={UrnaImage} alt='urna-image' />
                        <img src={MemoryGameImage} alt='memory-game-imc' />
                        <img src={CalcImcImage} alt='calc-imc-image' />
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default ProjectArea;
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
                        <a href='https://github.com/eduardorocham/food-ecommerce' target='_blank'>
                            <img src={EcommerceImage} alt='e-commerce-image'/>
                        </a>
                        <a href='https://github.com/eduardorocham/star-wars-app' target='_blank'>
                            <img src={StarWarsImage} alt='star-wars-image' />
                        </a>
                        <a href='https://github.com/eduardorocham/petshop' target='_blank'>
                            <img src={PetshopImage} alt='petshop-image' />
                        </a>
                        <a href='https://github.com/eduardorocham/urna' target='_blank'>
                            <img src={UrnaImage} alt='urna-image' />
                        </a>
                        <a href='https://github.com/eduardorocham/memory-game' target='_blank'>
                            <img src={MemoryGameImage} alt='memory-game-imc' />
                        </a>
                        <a href='https://github.com/eduardorocham/react_calc_imc' target='_blank'>
                            <img src={CalcImcImage} alt='calc-imc-image' />
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default ProjectArea;
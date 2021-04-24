import './projects.scss';
import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

const Projects = () => {
    
    
    const [isOpen, setOpen] = useState(false)
    
    return(
        <>
        <div class='box'>

            <div class='project-image'>
                <img src='./payme.png'></img>
            </div>

            <div class='project-info'>
                <h3 class='project-name'>Pay me</h3>
                <p>My capstone CodeClan project. This app makes it easy to track what you are owed,
                while hopefully not losing your friends in the process. Besides being able to see and add 
                invoices, Pay Me also makes automated voice calls every day to 
                remind debtors. App includes a simple user 
                registration and login feature.</p>

                <div class='skills'>
                    <div class='skill'>Javascript</div>
                    <div class='skill'>React</div>
                    <div class='skill'>Java</div>
                    <div class='skill'>Spring Boot</div>
                    <div class='skill'>H2 (SQL)</div>
                    <div class='skill'>HTML</div>
                    <div class='skill'>CSS</div>
                </div>

                <div class='action-buttons'>
                    <ModalVideo channel='custom' autoplay isOpen={isOpen} url='./payme_demo.mp4' onClose={() => setOpen(false)} />
                    <div class='demo-button' onClick={()=> setOpen(true)}>View demo</div>
                    <a href='https://github.com/palenz/payme'><div class='source-button'>View source</div></a>
                </div>
            
            </div>

        </div>

        <div class='box'>

            <div class='project-image'>
                <img src='./portfolio.png'></img>
            </div>

        <div class='project-info'>
            <h3 class='project-name'>Portfolio</h3>
            <p>This website! This app makes it easy to track what you are owed,
                while hopefully not losing your friends in the process. Besides being able to see and add 
                invoices, Pay Me also makes automated voice calls every day to 
                remind debtors. App includes a simple user 
                registration and login feature.</p>

                <div class='skills'>
                    <div class='skill'>Javascript</div>
                    <div class='skill'>React</div>
                    <div class='skill'>Java</div>
                    <div class='skill'>Spring Boot</div>
                    <div class='skill'>H2 (SQL)</div>
                    <div class='skill'>HTML</div>
                    <div class='skill'>CSS</div>
                </div>

            <div class='action-buttons'>
            <ModalVideo channel='custom' autoplay isOpen={isOpen} url='./payme_demo.mp4' onClose={() => setOpen(false)} />
            <div class='demo-button' onClick={()=> setOpen(true)}>View demo</div>
            <a href='https://github.com/palenz/payme'><div class='source-button'>View source</div></a>
            </div>
            
            </div>
        </div>

        <div class='box'>

            <div class='project-image'>
                <img src='./maze.png'></img>
            </div>

        <div class='project-info'>
            <h3 class='project-name'>Maze solver</h3>
            <p>Completed as part of a recruitment challenge. This program makes it easy to track what you are owed,
                while hopefully not losing your friends in the process. Besides being able to see and add 
                invoices, Pay Me also makes automated voice calls every day to 
                remind debtors. App includes a simple user 
                registration and login feature.</p>

                <div class='skills'>
                    <div class='skill'>Javascript</div>
                    <div class='skill'>React</div>
                    <div class='skill'>Java</div>
                    <div class='skill'>Spring Boot</div>
                    <div class='skill'>H2 (SQL)</div>
                    <div class='skill'>HTML</div>
                    <div class='skill'>CSS</div>
                </div>

            <div class='action-buttons'>
            <ModalVideo channel='custom' autoplay isOpen={isOpen} url='./payme_demo.mp4' onClose={() => setOpen(false)} />
            <div class='demo-button' onClick={()=> setOpen(true)}>View demo</div>
            <a href='https://github.com/palenz/payme'><div class='source-button'>View source</div></a>
            </div>
            
            </div>
        </div>
        
        <div class='box'>
            <div class='project-info'>
                <h3 class='project-name'>Portfolio tracking app</h3>
                <p>My capstone CodeClan project. This app makes it easy to track what you are owed,
                while hopefully not losing your friends in the process. Besides being able to see and add 
                invoices, Pay Me also makes automated voice calls every day to 
                remind debtors. App includes a simple user 
                registration and login feature.</p>

                <div class='skills'>
                    <div class='skill'>Javascript</div>
                    <div class='skill'>React</div>
                    <div class='skill'>Java</div>
                    <div class='skill'>Spring Boot</div>
                    <div class='skill'>H2 (SQL)</div>
                    <div class='skill'>HTML</div>
                    <div class='skill'>CSS</div>
                </div>

            <div class='action-buttons'>
                <ModalVideo channel='custom' autoplay isOpen={isOpen} url='./payme_demo.mp4' onClose={() => setOpen(false)} />
                <div class='demo-button' onClick={()=> setOpen(true)}>View demo</div>
                <a href='https://github.com/palenz/payme'><div class='source-button'>View source</div></a>
            </div>
            
            </div>
        </div>

        <div class='box'>
            <div class='project-info'>
                <h3 class='project-name'>EIS Investment app</h3>
                <p>My capstone CodeClan project. This app makes it easy to track what you are owed,
                while hopefully not losing your friends in the process. Besides being able to see and add 
                invoices, Pay Me also makes automated voice calls every day to 
                remind debtors. App includes a simple user 
                registration and login feature.</p>

                <div class='skills'>
                    <div class='skill'>Javascript</div>
                    <div class='skill'>React</div>
                    <div class='skill'>Java</div>
                    <div class='skill'>Spring Boot</div>
                    <div class='skill'>H2 (SQL)</div>
                    <div class='skill'>HTML</div>
                    <div class='skill'>CSS</div>
                </div>

            <div class='action-buttons'>
                <ModalVideo channel='custom' autoplay isOpen={isOpen} url='./payme_demo.mp4' onClose={() => setOpen(false)} />
                <div class='demo-button' onClick={()=> setOpen(true)}>View demo</div>
                <a href='https://github.com/palenz/payme'><div class='source-button'>View source</div></a>
            </div>
            
            </div>
        </div>
        </>
    )
    
}

export default Projects;
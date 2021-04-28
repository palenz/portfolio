import './projects.scss';
import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

const Projects = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    const [mazeOpen, setMazeOpen] = useState(false)
    
    return(
        <>
        <div class='box'>

            <div class='project-image'>
                <img src='./payme.png'></img>
            </div>

            <div class='project-info'>
                <h3 class='project-name'>Pay Me</h3>
                <p>My capstone CodeClan project. This app makes it easy to track what you are owed,
                while hopefully not losing your friends in the process. Besides being able to add and delete 
                invoices, Pay Me also makes automated voice calls every day to 
                remind debtors. App includes a simple user 
                registration and login feature.</p>

                <div class='skills'>
                    <div class='skill'>Javascript</div>
                    <div class='skill'>React</div>
                    <div class='skill'>Java</div>
                    <div class='skill'>Spring Boot</div>
                    <div class='skill'>Hibernate</div>
                    <div class='skill'>H2 (SQL)</div>
                    <div class='skill'>HTML</div>
                    <div class='skill'>CSS</div>
                </div>

                <div class='action-buttons'>
                    <ModalVideo channel='custom' autoplay isOpen={isOpen} url='./payme_demo.mp4' onClose={() => setIsOpen(false)} />
                    <div class='demo-button' onClick={()=> setIsOpen(true)}>View demo</div>
                    <a href='https://github.com/palenz/payme' target="_blank"><div class='source-button'>View source</div></a>
                </div>
            
            </div>

        </div>

        <div class='box'>

            <div class='project-image'>
                <img src='./portfolioapp.png'></img>
            </div>
            
            <div class='project-info'>
                <h3 class='project-name'>Portfolio tracking app</h3>
                <p>A single user app that helps the user track a portfolio of equities. The app allows the user to search for company by ticker, view price trends in a graph, and buy shares. The user can also see the total portfolio perfomance and sell individual stocks.</p>

                <div class='skills'>
                    <div class='skill'>Javascript</div>
                    <div class='skill'>Vue</div>
                    <div class='skill'>Node</div>
                    <div class='skill'>Express</div>
                    <div class='skill'>MongoDB</div>
                    <div class='skill'>HTML</div>
                    <div class='skill'>CSS</div>
                </div>

            <div class='action-buttons'>
                <a href='https://github.com/palenz/portfolio_tracking_app' target="_blank"><div class='source-button'>View source</div></a>
            </div>
            
            </div>
        </div>


        <div class='box'>

            <div class='project-image'>
                <img src='./maze.png'></img>
            </div>

        <div class='project-info'>
            <h3 class='project-name'>Maze solver</h3>
            <p>Completed as part of a coding challenge. This python program uses depth-first search to traverse a maze and find the exit, which is sometimes protected by a monster. The program makes the correct moves once it finds the path and guides the player to the exit while avoiding the monster.</p>

                <div class='skills'>
                    <div class='skill'>Python</div>
                </div>

            <div class='action-buttons'>
                    <ModalVideo channel='custom' autoplay isOpen={mazeOpen} url='./maze_demo.mp4' onClose={() => setMazeOpen(false)} />
                    <div class='demo-button' onClick={()=> setMazeOpen(true)}>View demo</div>
            <a href='https://github.com/palenz/maze_solver' target="_blank"><div class='source-button'>View source</div></a>
            </div>
            
            </div>
        </div>

        <div class='box'>

<div class='project-image'>
    <img src='./portfolio.png'></img>
</div>

<div class='project-info'>
<h3 class='project-name'>Portfolio</h3>
<p>This website! I made it from scratch using React and a lot of CSS. I am planning to change the key components so they consume JSON data, so that the site is easier to maintain. </p>

    <div class='skills'>
        <div class='skill'>Javascript</div>
        <div class='skill'>React</div>
        <div class='skill'>HTML</div>
        <div class='skill'>CSS</div>
    </div>

<div class='action-buttons'>
    <a href='https://github.com/palenz/portfolio' target="_blank"><div class='source-button'>View source</div></a>
</div>

</div>
</div>

        


        <div class='box'>

            <div class='project-image'>
                <img src='./eisapp.png'></img>
            </div>

            <div class='project-info'>
                <h3 class='project-name'>EIS Investment app</h3>
                <p>A simple flask app to help angel investment syndicates keep track of their investments and members. 
                    The user can add companies, as well as search and delete existing ones; create new investment rounds and add/delete investors.</p>

                <div class='skills'>
                    <div class='skill'>Python</div>
                    <div class='skill'>Flask</div>
                    <div class='skill'>SQL</div>
                    <div class='skill'>HTML</div>
                    <div class='skill'>CSS</div>
                </div>

            <div class='action-buttons'>
                <a href='https://github.com/palenz/investment_platform' target="_blank"><div class='source-button'>View source</div></a>
            </div>
            
            </div>
        </div>
        </>
    )
    
}

export default Projects;
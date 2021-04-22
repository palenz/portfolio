import Typewriter from 'typewriter-effect';
import './mainContainer.css';
import Menu from '../components/menu'
import About from '../components/about'
import Skills from '../components/skills'


function mainContainer() {

    


  return (
    <>

    <Menu></Menu>

    <div id='content'>

    <div id='name'>
    <h1 id="enter"> > </h1>
    <h1>
    <Typewriter onInit={(typewriter) => {
        typewriter.typeString('Juan Palenzuela').start();
        }}
    />    
    </h1>
    </div>
    
    <p>Full stack software engineer based in Edinburgh, Scotland. Passionate about beautiful, impactful user experiences. Have a look at my projects below.
    </p>

    <div class="heading">
    <h2>About</h2>
    <hr class="separator"></hr>
    </div>
    <About></About>

    <div class="heading">
    <h2>Skills</h2>
    <hr class="separator"></hr>
    </div>
    <Skills></Skills>

    
    </div>

    </>
  );
}

export default mainContainer;
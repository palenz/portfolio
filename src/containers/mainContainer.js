import Typewriter from 'typewriter-effect';
import './mainContainer.css';
import Menu from '../components/menu'


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
    
    <div><p>Full stack software engineer based in Edinburgh, Scotland. Passionate about beautiful, impactful user experiences. Have a look at my projects below.
    </p></div>

    <div class="heading"><h2>About</h2></div>
    <hr class="separator"></hr>

    </div>

    </>
  );
}

export default mainContainer;
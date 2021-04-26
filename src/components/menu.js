import './menu.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Menu = () => {

    return(

        <div id='menu-wrap'>
            <nav id="navbar">
                <ul id='menu-list'>
                    <li class='menu-item'><AnchorLink href='#skills'>Skills/CV</AnchorLink></li>
                    <li class='menu-item'><AnchorLink href='#projects'>Projects</AnchorLink></li>
                    <li class='menu-item'><AnchorLink href='#contact'>Contact</AnchorLink></li>
                </ul>
            </nav>

        </div>
    )
}

export default Menu;
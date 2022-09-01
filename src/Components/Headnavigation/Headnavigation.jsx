import Logo from '../Headnavigation/logoGradient.png'
import './headnavigation.css'

const Headnavigation = () => {
    return (
        <div className='flexbox'>
            <a href='./'>
                <img id='logo' src={Logo} alt='Personel brand logo for software developer Corey Long.' />
            </a>
            <ul id='navigation'>
                <li><a href="./web"     className='cooltext' id='navitem'>Web</a></li>
                <li><a href="./games"   className='cooltext' id='navitem'>Games</a></li>
                <li><a href="./about"   className='cooltext' id='navitem'>About</a></li>
                <li><a href="./contact" className='cooltext' id='navitem'>Contact</a></li>
            </ul>

        </div>
    )
}

export default Headnavigation
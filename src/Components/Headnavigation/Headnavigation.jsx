import Logo from '../Headnavigation/logoGradient.png'
import './headnavigation.css'

const Headnavigation = () => {
    return (
        <div className='flexbox'>
            <a href='./'>
                <img id='logo' src={Logo} alt='Personel brand logo for software developer Corey Long.' />
            </a>
            <ul id='navigation'>
                <li><a href="./web"     className='cooltext'>Web</a></li>
                <li><a href="./games"   className='cooltext'>Games</a></li>
                <li><a href="./about"   className='cooltext'>About</a></li>
                <li><a href="./contact" className='cooltext'>Contact</a></li>
            </ul>

        </div>
    )
}

export default Headnavigation
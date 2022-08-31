import Logo from '../Headnavigation/logoGradient.png'
import './headnavigation.css'

const Headnavigation = () => {
    return (
        <div className='flexbox'>

                    <img id='logo' src={Logo} alt='Personel brand logo for software developer Corey Long.' />
                    <br />
                    <ul id='navigation'>
                        <li><a href="./web">Web</a></li>
                        <li><a href="./games">Games</a></li>
                        <li><a href="./about">About</a></li>
                        <li><a href="./contact">Contact</a></li>
                        </ul>

        </div>
    )
}

export default Headnavigation
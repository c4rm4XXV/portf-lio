import style from './Navbar.module.css'
import { FaInstagram,FaLinkedinIn,FaGithub} from "react-icons/fa6";
import Nav from 'react-bootstrap/Nav'


function Navbar(){
    return(
        <div className={style.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skill'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/miguel_chavesangelo/' target='_blank' ><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/miguel-c-3659a5123/' target='_blank'><FaGithub size={30}/></a></li>
                <li><a href='https://github.com/c4rm4XXV' target='_blank'><FaLinkedinIn size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar
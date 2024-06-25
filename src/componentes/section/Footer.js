import style from './Footer.module.css'
import { FaInstagram,FaLinkedinIn,FaGithub} from "react-icons/fa6";


function Footer(){
    return(
        <div className={style.footer}> 
           <ul>
                <li><a href='https://www.instagram.com/miguel_chavesangelo/' target='_blank' ><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/miguel-c-3659a5123/' target='_blank'><FaGithub size={30}/></a></li>
                <li><a href='https://github.com/c4rm4XXV' target='_blank'><FaLinkedinIn size={30}/></a></li>
            </ul>
            <p>macgburiti2000@gmail.com.br</p>
            <p>Miguel Ângelo © 2024 </p>
        </div>
    )
}

export default Footer
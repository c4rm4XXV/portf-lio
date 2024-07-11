import style from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'


function Presentation(){
    return(
        <div id="Presentation" className={style.presentation}>
            <h4><storage>Bem-Vindo ao meu Portfólio</storage></h4>

            <h1>Olá, eu sou Miguel Ângelo</h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras.<br/>
                Como Desenvolvedor Full-Stack, eu tenho o compromisso de resolver<br/> 
                problemas complexos e ampliar meu leque de conhecimentos e projetos.<br/>
                Meus projetos já geraram horas de empeinho e dedicação<br/>
                estou sempre em busca de novos desafios para superar.
            </p>            
            <ButtonA link='https://github.com/c4rm4XXV' text='Conecte-se comigo'/>
        </div>
    )
}

export default Presentation
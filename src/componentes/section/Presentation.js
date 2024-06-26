import style from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'


function Presentation(){
    return(
        <div id="Presentation" className={style.presentation}>
            <h4><storage>Bem-Vindo ao meu Portfólio</storage></h4>

            <h1>Olá, eu sou Miguel Ângelo</h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras.<br/>
                Como Product Manager, eu tenho o compromisso de resolver problemas<br/>
                complexos e trazer resultados excepcionais para os negócios.<br/>
                Meus projetos já geraram milhões de reais em receita anual<br/>
                estou sempre em busca de novos desafios para superar.
            </p>            
            <ButtonA link='https://github.com/c4rm4XXV' text='Conecte-se comigo'/>
        </div>
    )
}

export default Presentation
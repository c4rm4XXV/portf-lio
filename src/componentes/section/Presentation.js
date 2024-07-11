import style from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useState, useEffect } from 'react'
function Presentation() {
    const [text, setText] = useState('')
    const toRotate = ['Miguel Ângelo', "Desenvolvedor Full-Stack", "Aux. de T.I"]
    const [loop, setLoop] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const period = 2000;
    const [delta, setDelta] = useState(2000)

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        })
        return () => { clearInterval(ticker) }
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting? fullText.substring(0,text.length-1): fullText.substring(0,text.length+1)
        
        
        setText(updatedText);

        if(!isDeleting&&updatedText===fullText){
            setIsDeleting(true);
            setDelta(period)
        } else if(isDeleting&&updatedText===''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1)
        }
    }
    return (
        <div id="Presentation" className={style.presentation}>
            <h4><storage>Bem-Vindo ao meu Portfólio</storage></h4>

            <h1>Olá, eu sou {text}</h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras.<br />
                Como Desenvolvedor Full-Stack, eu tenho o compromisso de resolver<br />
                problemas complexos e ampliar meu leque de conhecimentos e projetos.<br />
                Meus projetos já proporcionaram horas de empeinho e dedicação<br />
                estou sempre em busca de novos desafios para superar.
            </p>
            <ButtonA link='https://github.com/c4rm4XXV' text='Conecte-se comigo' />
        </div>
    )
}

export default Presentation
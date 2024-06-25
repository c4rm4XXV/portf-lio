import Style from './Skills.module.css'
import javaScript from '../../image/Skills/javaScript.svg'
import react from '../../image/Skills/React.svg'
import html from '../../image/Skills/HTML.svg'
import css from '../../image/Skills/CSS.svg'


function Skills(){
    return(
        <div className={Style.skill} id="Skill">
            <h1>Habilidades</h1>
            <p>Conhecaça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javaScript}/>
                <img src={html}/>
                <img src={css}/>                
                <img src={react}/>
                
            </div>
        </div>
    )
}

export default Skills
import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import meteo from '../../image/Projects/meteo.png'
import portfolio from '../../image/Projects/portfolio.png'
function Projects(){
    return(
        <div id="Projects" className={styles.projects}>
            <h1>Projetos</h1>
            <Card
                site={'https://implatacao-api-taskdnc.vercel.app/'}
                img={meteo}
                title={'PROJETO DESAFIO 2 DNC'}
                tecno={'HTML, CSS, JavaScript, API viaCep e API OpenWeatherMap'}
                descrition={'Este código cria uma página web que permite ao usuário consultar endereços e previsões do tempo.'}
                repo={'https://github.com/c4rm4XXV/task_two_DNC?tab=readme-ov-file'}
            />
            <Card 
                img={portfolio} 
                title={'PORTIFÓLIO'} 
                tecno={'HTML, CSS, JavaScript, REACT'} 
                descrition={'Este projeto tem como finalidade me apresentar e mostrar minha trajetória e conhecimento no mundo dev'}
                repo={'https://github.com/c4rm4XXV'}
                site={""}
            />
            <ButtonB link={'https://github.com/c4rm4XXV'}text={'Acesse meu repositório'}/>
        </div>
    )
}

export default Projects
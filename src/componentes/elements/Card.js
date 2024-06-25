import style from './Card.module.css'
import ButtonB  from './ButtonB'
function Card({img,title,descrition,tecno,repo,site}){
    return(
        <div className={style.card}>
            <a target='_blank' href={site}>
                <img src={img} />
            </a>
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologias:</strong>{tecno}</p>
                <p>{descrition}</p>
                <ButtonB link={repo} text='Acesse o Repositório'/>
            </section>
        </div>
    )
}

export default Card
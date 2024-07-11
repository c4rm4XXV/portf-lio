import style from './Card.module.css'
import ButtonB from './ButtonB'
import { useState } from 'react'
function Card({ img, title, descrition, tecno, repo, site }) {

    const [info, setInfo] = useState(false)

    function InfoON() {
        setInfo(true)
    }

    function InfoOFF(){
        setInfo(false)
    }

    return (
        <div className={style.card}>
            <a onMouseEnter={InfoON} onMouseLeave={InfoOFF} target='_blank' href={site}>
                <img src={img} />
            </a>
            {info === true && (
                <section>
                    <h3>{title}</h3>
                    <p><strong>Tecnologias:</strong>{tecno}</p>
                    <p>{descrition}</p>
                    <ButtonB link={repo} text='Acesse o Repositório' />
                </section>
            )

            }

        </div>
    )
}

export default Card
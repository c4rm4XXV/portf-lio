import styles from './ButtonB.module.css'

function ButtonB({text,link}){
    return(
        <div>
            <a href={link} target='_blank' >
                <button class={styles.bnt}>{text}</button>
            </a>
        </div>
    )

}

export default ButtonB
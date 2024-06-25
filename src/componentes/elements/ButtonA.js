import styles from './ButtonA.module.css'
function ButtonA({text, link}){
    return(
        <div>
            <a href={link}  target='_blank'>
                <button class={styles.bnt}>{text}</button>
            </a>
        </div>
    )

}

export default ButtonA
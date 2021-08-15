import styles from '../styles/Home.module.css'

export default function Word({children}) {

    return(
        <div className={styles.palavraBox}>
            <span className={styles.palavra}>{children}</span>
        </div>
    )
}
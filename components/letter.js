import styles from '../styles/Home.module.css'

export default function Letter({children}) {

    return(
        <div className={styles.letraBox}>
            <span className={styles.letra}>{children}</span>
        </div>
    )
}
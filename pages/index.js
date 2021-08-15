import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Word from '../components/word'
import data from '../data'
import Letter from '../components/letter'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Complete a Palavra</title>
        <meta name="description" content="Jogo Educacional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.letras}>
          {data.letras.map(letra => (
            <Letter>{letra}</Letter>
          ))}
        </div>

        <div className={styles.palavras}>
          {data.palavras.map(palavra => (
            <Word>{palavra}</Word>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/cordeirolucas42/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por Lucas Cordeiro
        </a>
      </footer>
    </div>
  )
}

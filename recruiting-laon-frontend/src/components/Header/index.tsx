import Link from 'next/link'
import styles from './styles.module.scss'


export function Header() {

  const handleClick = () => {
    console.log('clicou')
  }

  return(
    <header>
      <nav className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.button}>
            <img  src='/images/Back.png' onClick={handleClick}/>
            <label>VOLTAR</label>
          </div>
          <img src="/images/Logo.png" alt="Laon" />
          <Link href="" className={styles.linkStyle}>ENTRAR</Link>
        </div>
      </nav>
    </header>
  )
}
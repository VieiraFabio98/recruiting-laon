import styles from './styles.module.scss'

export function Header() {
  return(
    <header>
      <nav className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div>
            <button name="button"></button>
            <span>VOLTAR</span>
          </div>
          <img src="/images/Logo.png" alt="Laon" />
          <button>ENTRAR</button>
        </div>
      </nav>
    </header>
  )
}
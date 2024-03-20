import styles from './styles.module.scss'
import { useRouter } from 'next/router'


export function Header() {

  const router = useRouter()

  const handleNavigate = (route: string) => {
    router.push(route)
  }

  return(
    <header>
      <nav className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.button} onClick={() => handleNavigate('/')}>
            <img  src='/images/Back.png'/>
            <label>VOLTAR</label>
          </div>
          <img src="/images/Logo.png" alt="Laon" />
          <label className={styles.linkStyle} onClick={() => handleNavigate('Login')}>ENTRAR</label>
        </div>
      </nav>
    </header>
  )
}
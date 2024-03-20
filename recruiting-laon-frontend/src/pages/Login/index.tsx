import { useState } from 'react'
import styles from './styles.module.scss'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const payload = {
      email: email,
      password: password,
    }

    const response = await fetch('http://localhost:8000/api/register-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if(response.status === 201) {
      alert('Cadastro realizado com sucesso!')
    }

  }

  return(
    <div className={styles.registerContainer}>
      <h1 className={styles.h1}>Entrar</h1>
      <p className={styles.p}>Bem vindo(a) de volta!</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            className={styles.inputForm}  
            type="email" 
            placeholder="E-mail" 
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div>
          <input 
            className={styles.inputForm}  
            type="password" 
            placeholder="Senha" 
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button className={styles.buttonForm} type="submit">Entrar</button>
      </form>
    </div>
  )
}
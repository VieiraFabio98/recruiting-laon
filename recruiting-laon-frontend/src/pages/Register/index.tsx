import { useState } from 'react'
import styles from './styles.module.scss'

export function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const payload = {
      name: name,
      email: email,
    }
    
    console.log(process.env.BASEURL)
    const response = await fetch(`http://localhost:8000/api/register-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    
    const responseData = await response.json()

    if(response.ok) {
      alert('Cadastro realizado com sucesso!')
    }

    if(responseData.status === '422') {
      alert(responseData.message)
    }
  }

  return(
    <div className={styles.registerContainer}>
      <h1 className={styles.h1}>Cadastre-se</h1>
      <p className={styles.p}>Acompanhe os melhores filmes e séries.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            className={styles.inputForm} 
            type="text" 
            placeholder="Nome" 
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
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
        <p className={styles.pForm}>Ao clicar em cadastrar, você está aceitando os Termos e Condições e a Política de Privacidade da Laon.</p>
        <button className={styles.buttonForm} type="submit">Cadastrar</button>
      </form>
    </div>
  )
}
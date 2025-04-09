import './App.css'
import MyInput from './components/input/MyInput'
import MyButton from './components/button/MyButton'
import { useState } from 'react'
import PostService from './API/PostService'
function App() {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
 
  const sendValues = () => {
    PostService.createUser({username: setName, password: setPassword, email: setEmail})
  }
  return (
    <div className="main">
      <div className='form-container'>
        <h1>Регистрация</h1>
        <MyInput type={'text'} labelName={"Имя пользователя"} onChange={setName} value={name}/>
        <MyInput type={'password'} labelName={"Пароль"}  onChange={setPassword} value={password}/>
        <MyInput type={'email'} labelName={"Почта"}  onChange={setEmail} value={email}/>
        <MyButton click={sendValues}/>
      </div>
    </div>
  )
}

export default App


// браузерные технологии, кодварс, mern, михаил непомнящий, спросить у вовы за понимание кода, всё про браузеры(JS, REACT)
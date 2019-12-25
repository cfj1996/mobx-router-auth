import React, {useState} from "react"
import {useHistory} from 'react-router-dom'

const Login = (props) => {
  const history = useHistory()
  const landing  = () => {
    localStorage.name=name
    localStorage.auth=auth
    history.push('/home')
  }
  const [name, saveName] = useState(null)
  const [auth, saveAuth] = useState(null)
  return <main>
    <h1>是否登陆</h1>
    <div>
      <label>用户名</label>
      <input onChange={(e) => {
        saveName(e.target.value)
      }}/>
    </div>
    <div>
      <label>权限值</label>
      <input onChange={(e) => {
        saveAuth(e.target.value)
      }}/>
    </div>
    <p>权限值：1，2，3，5，6，7，8，9，10，11，12，13，15，</p>
    <button onClick={landing}>登陆</button>
  </main>
}

export default Login

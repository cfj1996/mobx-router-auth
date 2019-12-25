import React, {useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import NavBar from "../page/component/NavBar"

const AuthRouter = ({children, ...res})=> {
  useEffect(()=> {
    document.title = res.title
  })
  if(!localStorage.name){
    return  <Redirect to={'/login'}/>
  }
  if(!res.auth|| (res.auth&&(Number(localStorage.auth)&res.auth))){
    return <div className={'app'}>
      <NavBar/>
      {children}
    </div>
  } else {
    return <Redirect to={'/'}/>
  }
}

export default AuthRouter

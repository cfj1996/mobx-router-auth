import React, {useContext} from "react"
import {useHistory} from 'react-router-dom'
import {DeviceCom} from '../deviceCom/Index'
import {userImg} from '../deviceCom/info'
import {observer,} from "mobx-react";
import IndexContext from '../../Context/IndexContext'
const Index = observer((props)=> {
  const history = useHistory()
  const data = useContext(IndexContext)
  console.log('data', data)
  return <main className={'page'}>
    <DeviceCom name={userImg}/>
    <button onClick={()=> history.push('/detailed')}>跳转</button>
    <h1>登陆成功, 首页</h1>
  </main>
})

export default Index

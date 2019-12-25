import React from 'react'
import {Link} from "react-router-dom"
import Auth from './ComAuth'
import style from './Nav.module.less'

const NavBar = () => {
  return <div className={style.nav}>
    <ul>
      <li>
        <Link to="/home">首页</Link>
      </li>
      <Auth auth={1}>
        <li>
          <Link to="/work">合作</Link>
        </li>
      </Auth>
      <Auth auth={2}>
      <li>
        <Link to="/case">案例</Link>
      </li>
      </Auth>
      <Auth auth={4}>
      <li>
        <Link to="/store">商城</Link>
      </li>
      </Auth>
      <Auth auth={8}>
      <li>
        <Link to="/detailed">详细信息</Link>
      </li>
      </Auth>
      <li>
        <Link to="/myinfo">我的</Link>
      </li>
    </ul>
    <div onClick={()=> {localStorage.clear()}}>
      <Link to="/login">退出</Link>
    </div>
  </div>
}

export default NavBar

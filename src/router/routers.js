import React from 'react'
import Err404 from "../page/404"
import Login from "../page/Login"
import AuthRouter from './AuthRouter'
import MyInfo from "../page/IndexPage/MyInfo"
import Detailed from "../page/IndexPage/Detailed"
import Index from '../page/IndexPage/Index'
import Work from '../page/IndexPage/Work'
import Store from '../page/IndexPage/Store'
import Case from '../page/IndexPage/Case'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

const Routers = () => {
  return <Router>
    <Switch>
      <Route path={"/home"}><AuthRouter title={'主页'}><Index/></AuthRouter></Route>
      <Route path={"/work"}><AuthRouter title={'合作'} auth={1}><Work/></AuthRouter></Route>
      <Route path={"/case"}><AuthRouter title={'案例'} auth={2}><Case/></AuthRouter></Route>
      <Route path={"/store"}><AuthRouter title={'商城'} auth={4}><Store/></AuthRouter></Route>
      <Route path={"/detailed"}><AuthRouter  title={'详细信息'} auth={8}><Detailed/></AuthRouter></Route>
      <Route path={"/myinfo"}><AuthRouter title={'我的'}><MyInfo/></AuthRouter></Route>
      <Route path='/login' render={() => localStorage.name? <Redirect to='/home'/>:<Login/>}/>
      <Route exact path={'/'}><Redirect to='/home'/></Route>
      <Route><Err404/></Route>
    </Switch>
  </Router>
}
export default Routers

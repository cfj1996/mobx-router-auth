import React from 'react';
import Routers from './router/routers'
import './App.less'
import IndexContext from './Context/IndexContext'

const {Provider}  = IndexContext
function App() {
  return <Provider value={{a:1, b:2}}><Routers /></Provider>
}

export default App;

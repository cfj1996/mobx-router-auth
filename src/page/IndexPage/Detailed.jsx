import React from "react"
import {useHistory} from 'react-router-dom'

const Detailed = function () {
  const history = useHistory()

  return <div className={'page'}>
    <button onClick={()=> history.push('/myinfo')}>跳转</button>
    <p>详细页面</p>
  </div>
}

export default Detailed

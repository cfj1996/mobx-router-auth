import React from "react"

const ComAuth = ({children, auth}) => {
  return  !!(Number(localStorage.auth)&auth)&&children
}

export default ComAuth

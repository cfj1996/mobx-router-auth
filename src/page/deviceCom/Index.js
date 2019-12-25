/**
 * 组件索引
 */
import React from 'react'
import Mobile from './Mobile' // 组件
import GenBrowser from './GenBrowser'
import WxChat from './WxChat'
const userAgent = navigator.userAgent.toUpperCase();

export const DeviceCom = ({name}) => {
  let Dom = null
  if(/WXWORK/.test(userAgent)){
    Dom = WxChat[name]
  } else if(/MOBILE/.test(userAgent)){
    Dom = Mobile[name]
  } else {
    Dom = GenBrowser[name]
  }
  return <Dom/>
}

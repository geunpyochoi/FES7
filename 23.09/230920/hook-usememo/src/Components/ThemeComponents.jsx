import React, { useContext } from 'react'
import { ThemeContext } from './DarkMode'


export default function ThemeComponents() {

  const {theme} = useContext(ThemeContext);
  return (
    <div style={{color: theme === 'dark' ? "gray" : "black"}}>현재 테마 : {theme}</div>
  )
}

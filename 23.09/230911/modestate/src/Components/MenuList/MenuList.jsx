import React from 'react'
import MenuListItem from '../MenuListItem/MenuListItem';
import "./MenuList.css"

export default function MenuList(props) {

  const menus = ["좋아요! 😃", "정말 좋아요! 🤭", "최고에요! 😄", "미쳤어요!! 🤪"];

  return (
    <ul className='container-list'>
      {menus.map((moodEl,idx)=>{
        return <MenuListItem key={idx} mood={moodEl} setCurrentMood = {props.setCurrentMood}/>
      })}
    </ul>
    )
}

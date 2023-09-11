import React, {useState} from "react";

function Resume(props){
  // let like = 0;
  let [like,setLike] = useState('');
  function clickLike(){
    // like += 1;
    if(like === "") setLike("like");     
    else if (like === "like") setLike(""); 
  }
  return(
    <div style={{border:"1px solid black"}}>
    <h1>{props.name} 자기소개서</h1>
    <h2>{props.hello}</h2>
    <h3>취미 : {props.hobby}</h3>
    <h3>좋아하는 음식 : {props.food}</h3>
    <h3>좋아하는 색 : <span style={{color:"blue"}}>{props.color}</span></h3>
    <button onClick={clickLike}>like </button> <span>{like}</span>
    </div>
  )
}

export default Resume;
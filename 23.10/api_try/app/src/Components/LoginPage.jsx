import React, { useState } from 'react'

export default function LoginPage() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const inputEmail = (e) =>{
    setEmail(e.target.value);
  }
  const inputPassword = (e) =>{
    setPassword(e.target.value);
  }
  return (
    <>
      <h1>로그인</h1>
      <section>
        <h2>이메일, 비밀번호 입력하는 곳</h2>
        <form>
          <input type="text" placeholder='이메일 입력' onChange={inputEmail}/>
          <input type="password" placeholder='비밀번호 입력' onChange={inputPassword}/>
          <button type='submit'>로그인</button>
        </form>
      </section>
    </>
  )
}

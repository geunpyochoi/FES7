import { useState } from "react"

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (email,password)=>{
        const baseUrl = "https://api.mandarin.weniv.co.kr";
        const reqPath = "/user/login";
        
        const loginData = {
          "user":{
            "email":email,
            "password":password
          }
        };
        const reqUrl = baseUrl+reqPath;
        fetch(reqUrl,{
          method:"POST",
          headers:{
            "Content-type":"application/json"  
          },
          body:JSON.stringify(loginData)
        });
    }

    const inputEmail = (e)=>{
        setEmail(e.target.value);
    }
    const inputPassword = (e)=>{
        setPassword(e.target.value);
    }
    const submitLogin = (e)=>{
        e.preventDefault();
        login();
    }
    return(
        <>
            <h1>로그인</h1>
            <section>
                <h2>이메일, 비밀번호 입력하는곳</h2>
                <form onSubmit={submitLogin}>
                    <input type="text" placeholder="이메일입력" onChange={inputEmail} value={email}/>
                    <input type="text" placeholder="비밀번호입력" onChange={inputPassword} value={password}/>
                    <button>로그인</button>
                </form>
            </section>
        </>
    )
}

export default LoginPage
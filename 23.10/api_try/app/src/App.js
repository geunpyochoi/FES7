import LoginPage from "./Components/LoginPage";
import JoinPage from "./Components/JoinPage";
import { useState } from "react";

function App() {
  const [page,setPage] = useState(false);
  const [info,setinfo]=useState("");
  const handlePage = () =>{
    setPage((prevPage)=>{
      return !prevPage
    })
  }
  const getMyinfo = async() =>{
    const reqUrl = "https://api.mandarin.weniv.co.kr/user/myinfo";
    const token = localStorage.getItem("token");
    console.log(token);
    const res = await fetch(reqUrl,{
      headers:{
      	Authorization : `Bearer ${token}`
      }
    });
    const json = await res.json();
    console.log(json);
    setinfo(JSON.stringify(json))
  }
  return (
    <div>
      <button type="button" onClick={getMyinfo}>내 정보 불러오기</button>{info}
      {page ? <JoinPage handlePage={handlePage}/> : <LoginPage handlePage={handlePage}/>}
    </div>
  );
}
export default App;

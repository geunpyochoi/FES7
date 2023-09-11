import DisplayMood from "./Components/DisplayMood/DisplayMood";
import MenuList from "./Components/MenuList/MenuList";
import { useState } from "react";


function App() {

  const[currentMood,setCurrentMood] = useState("");
  return (
    <div>
      <h1>오늘의 기분을 선택해주세요. 😊</h1>
      <div>
        <MenuList setCurrentMood={setCurrentMood}/>
        <DisplayMood mood = {currentMood}/>
      </div>
    </div>
  );
}
export default App;

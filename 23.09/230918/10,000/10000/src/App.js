import Header from "./Components/header/header";
import Main from "./Components/main/main";
import Footer from "./Components/footer/footer";
import Modal from "./Components/modal/modal";
import { useState } from "react";
function App() {

  const [modalShow,setModalShow] = useState(false);

  return (
    <div id="app">
      <Header/>
      <Main setModalShow={setModalShow}/>
      <Footer/>
      {modalShow && <Modal setModalShow={setModalShow}/>}
    </div>
  );
}
export default App;

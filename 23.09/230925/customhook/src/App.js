import InputComponent from "./components/InputComponent";
import SomethingComponent from "./components/SomethingComponent";
import useMouseLocation from "./Hooks/useMouseLocation";
import useScroll from "./Hooks/useScroll";

function App() {
  // const {x,y} = useMouseLocation();
  const isBottom = useScroll();
  console.log(isBottom)
  // const mouseLocation = useMouseLocation(); => 일케 하면 x 뽑을 때 mouseLocation.x 로 표현한다.
  return (
    <div style={{height:3000}}>
      {/* <div style={{height:100,width:100,backgroundColor: x > 100 && y > 100 ? "royalblue" : "hotpink"}}></div> */}
      <InputComponent/>
      <SomethingComponent/>
    </div>
  );
}
export default App;

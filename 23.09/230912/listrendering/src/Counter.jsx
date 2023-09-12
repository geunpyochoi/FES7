import React, { useState } from 'react'

export default function Counter() {
  
  const [count,setCount] = useState(0);

  function increment(){
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // prevVal은 count의 이전 값을 명시한다.
    // setState의 인자로 사용된 함수는 이전 state값을 전달받으며 그 값을 이용한 함수들은 큐에 저장되어 순서대로 실행된다. 따라서 큐에서 차례로 prev(이전) 값을 받아 수행할 수 있으니 모든 setState구문이 동작하는 것이다.


    setCount((prevVal)=>{
      return prevVal + 1;
    })
    setCount((prevVal)=>{
      return prevVal + 1;
    })
    setCount((prevVal)=>{
      return prevVal + 1;
    })
    // state 함수가 실행되면 state가 변경됩니다. state가 변경되면 컴포넌트가 다시 렌더링됩니다. 
    // 이때 state 함수는 바로 실행되지 않고 기다렸다가 가장 마지막에 호출된 state 함수만 실행됩니다.
    // 가장 마지막에 있는 setCount 함수만 실행된다. 
    // 이런 현상이 발생하는 이유는 업데이트는 큰 작업이고, state 함수는 비동기적으로 동작하기 때문이다. => 언제 홈페이지에 변동사항이 생길지 모르기 때문에
    // 그러므로 같은 state를 여러번 호출하는 것은 의미가 없다. 
    // 강제적으로는 가능한데, 
  }

  function decrement(){
    setCount(count - 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  )
}

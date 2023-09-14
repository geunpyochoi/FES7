import React from 'react'
import { BrowserRouter, Routes,Route,Link, Outlet, useLocation, useParams, useNavigate } from 'react-router-dom'

export default function App5() {
  return (
    <BrowserRouter>
      <Link to="/"> homepage </Link>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/cart' element={<Cart/>}/>
        {/* <Route path='/users/*' element={<Outlet/>}> */}
        <Route path='users' element={<Users/>}>
          {/* Outlet은 라우트에서 자식으로 있는 컴포넌트를 꺼내서 보여준다. */}
          {/* <Route path='' element={<Users/>}/> */}
          <Route path='coupon/' element={<Coupon/>}/>
          <Route path='question/' element={<Question/>}/>
          <Route path='notice/' element={<Notice/>}/>
        </Route>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/products/:id/notice' element={<ProductNotice/>}/>
      </Routes>
      {/* /users로 이동하는 버튼! useNavigate로 이동하기 */}
      <Button/>
    </BrowserRouter>
  )
}

function Button(){
  const nav = useNavigate();
  return <button onClick={()=>nav("/users")}>유저보기</button>
}

function Index(){
  return <h1>홈페이지입니다.</h1>
}

function Cart(){
  return(
    <p>카트 페이지입니다.</p>
  )
}

function Users(){
  return(
    <>
    <p>User 페이지입니다.</p>
    <Outlet/>
    </>
  )
}
function Coupon(){
  return(
    <p>User Coupon 페이지입니다.</p>
  )
}
function Question(){
  return(
    <p>User Q&A 페이지입니다.</p>
  )
}
function Notice(){
  return(
    <p>User 공지사항 페이지입니다.</p>
  )
}
function ProductNotice(){
  const {id} = useParams();
  return(
    <p>Product {id}번 공지사항 페이지입니다.</p>
  )
}
function Product(){
  const location = useLocation();
  console.log(location);
  const {id} = useParams();
  return <h1>Product {id}번 페이지입니다.</h1>
}



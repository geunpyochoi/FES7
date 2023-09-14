import { BrowserRouter, Routes, Route, Link, useLocation, Outlet } from "react-router-dom";

function App4() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='licat' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three/*" element={<Outlet />}> 
        {/* Outlet은 내 안에 있는 걸 내보내서 보여준다는 뜻 */}
          <Route path="" element={<HojunIndex/>}/>
          {/* /three/에 대한 라우트 */}
          <Route path="hojunone/" element={<HojunOne/>}/>
          {/* /three/hojunone/에 대한 라우트 */}
          <Route path="hojuntwo/" element={<HojunTwo/>}/>
          {/* /three/hojuntwo/에 대한 라우트 */}
        </Route>
        <Route path="/blog/:id" element={<Blog />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One({name}){
  return <h1>{name} world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

function Blog(){
    const location = useLocation();
  console.log(location)
  return <h1>hello Blog</h1>
}

function HojunIndex(){
    const location = useLocation();
  console.log(location)
  return <h1>hello Hojun index</h1>
}

function HojunOne(){
    const location = useLocation();
  console.log(location)
  return <h1>hello Hojun 1</h1>
}

function HojunTwo(){
    const location = useLocation();
  console.log(location)
  return <h1>hello Hojun 2</h1>
}

export default App4;
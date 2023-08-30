const http = require("http");

http.createServer((req,res)=>{ //요청과 응답
  // res.writeHead(200,{"Content-Type":"text/html"});
  // res.end("<p>Hello World~!!</p>");
  if(req.url === "/"){
    res.writeHead(200);
    res.end("main url");
  }
  else if(req.url === "/upload"){
    res.writeHead(200);
    res.end("upload url");
  }
  else if(req.url === "/delete"){
    res.writeHead(200);
    res.end("delete url");
  }
  else{
    res.writeHead(404);
    res.end("Not found")
  }
})
.listen(3000,()=>{ // 3000번 포트내에 대기를 시킬 수 있는 함수
  console.log("3000번 포트 서버 접속 완료");
})
// pending
// pulfilled
// rejected
// promise의 3가지 상태

function sayHello(){
  return new Promise((resolve,reject)=>{
    const hello = "hello hello";
    resolve(hello);
    // reject(new Error());
  });
}
// sayHello()
// .then((resolvedData)=>{
//   console.log(resolvedData);
//   return resolvedData;
// })
// .then((resolvedData)=>{
//   console.log(resolvedData);
//   return resolvedData;
// })
// .then((resolvedData)=>{
//   console.log(resolvedData);
// })
// .catch((error)=>{
//   console.log(error);
// })

async function test() {
  const hello1 = await sayHello();
  console.log(hello1);
}

test();
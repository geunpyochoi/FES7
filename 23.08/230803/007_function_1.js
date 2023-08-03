function stringToNumber(str){
  return +str.replaceAll(',','');
}
function printAndSplit(str){
  return str.split('');
}
function addAndPow(x,y){
  return (x+y)**2;
}
console.log(printAndSplit("world"));
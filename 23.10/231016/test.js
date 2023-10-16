function sumArray(arr, index = 0) {
  //여기를 채워주세요
  return arr.reduce((a, c) => a + c, 0);
}

// 사용 예시
const arr = [1, 2, 3, 4, 5];
const result = sumArray(arr);
console.log(result); // 출력: 15

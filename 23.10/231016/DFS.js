// 0. 반복...
// .언제까지 ? stack에 아무것도 남지 않을 때까지 => 모든 노드에 방문할때까지
// 1. 시작노드 방문하기
// 1-1. 시작노드를 스택에 넣고 스택에서 pop()
// 1-2. pop()한 값이 current가 됨.
// 1-3. 시작노드를 방문하게 됨
// 2. 시작노드의 인접노드를 스택에 넣는다.
// 3. 스택에서 pop()
// 4. pop()한 값이 current가 됨. => 이게 방문한거임
// 4-1. current가 방문한 적이 있는지 확인해야한다.
// 5. current를 방문목록에 넣는다.
// 6. current의 인접노드를 스택에 넣는다.

function DFS(graph, start) {
  let visited = [];
  let stack = [start];

  while (stack.length !== 0) {
    // 스택으 마지막 입력값을 꺼낸다
    let current = stack.pop();
    // indexOf는 배열안의 값을 살펴보고 없으면 -1을 리턴한다.
    if (visited.indexOf(current) === -1) {
      visited.push(current);
      // 방문한 적이 없는 인접 노드를 찾고 인접노드들로 만든다.
      let neighbors = graph[current].filter((n) => visited.indexOf(n) === -1);
      // 스택에 방문할 노드들을 추가한다.
      // concat은 배열을 합치는데 사용된다.
      stack = stack.concat(neighbors);
    }
  }
  // 방문한 순서를 리턴한다.
  return visited;
}

const graph = {
  0: [1, 2, 3],
  1: [4, 5],
  2: [],
  3: [],
  4: [6],
  5: [],
  6: [],
};
const result = DFS(graph, 0);
console.log(result); //[0, 1, 4, 6, 5, 2, 3]

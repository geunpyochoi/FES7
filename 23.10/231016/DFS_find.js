const tree = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
  [1, 5],
  [4, 6],
];

// const graph = {
//   0: [1, 2, 3],
//   1: [4, 5],
//   2: [],
//   3: [],
//   4: [6],
//   5: [],
//   6: [],
// };
// 아래 함수를 변경해주세요
function DFS(graph, start, target) {
  let visited = [];
  let stack = [start];
  let cnt = 0;
  while (stack.length !== 0) {
    let current = stack.pop();
    // indexOf는 배열안의 값을 살펴보고 없으면 -1을 리턴한다.
    if (visited.indexOf(current) === -1) {
      visited.push(current);
      cnt++;
      // 방문한 적이 없는 인접 노드를 찾고 인접노드들로 만든다.
      // currunt가 찾고자 하는 값이면 return
      if (current === target) {
        return visited.length;
      }
      let neighbors = graph[current].filter((n) => visited.indexOf(n) === -1);
      // 스택에 방문할 노드들을 추가한다.
      // concat은 배열을 합치는데 사용된다.
      stack = stack.concat(neighbors);
    }
  }
  // 없으면
  return -1;
}

function convert(tree) {
  const graph = {};
  tree.forEach((nodeInfo) => {
    graph[nodeInfo[0]] = [];
    graph[nodeInfo[1]] = [];
  });
  console.log(graph);
  tree.forEach((nodeInfo) => {
    graph[nodeInfo[0]].push(nodeInfo[1]);
  });
  return graph;
}

const graph = convert(tree);

const graph = {
  0: [1, 2, 3],
  1: [4, 5],
  2: [],
  3: [],
  4: [6],
  5: [],
  6: [],
};
function DFS(graph, node, visited = []) {
  if (visited.indexOf(node) === -1) {
    visited.push(node);
    // 첫번재 함수호출에서 visited에 [0]이들어간다
    for (let neighbor of graph[node]) {
      // 각각 0에 있는 1,2,3이 순차적으로 실행됨 visited는 [0]
      // DFS(graph, [4,5], [0])
      // DFS(graph, [], [0])
      // DFS(graph, [], [0]) 이렇게 들어가게됨!
      DFS(graph, neighbor, visited);
    }
  }
  return visited;
}

// 첫번째 시작 -> 시작노드가 0
// 방문목록에 0추가
// 0 노드에는 [1,2,3]이 있었습니다.
// 1 먼저 들어감 => 여기서 반복문 1,2,3중에 1시작
// dfs(graph, 1, [0])
// 1 노드에는 [4,5]가 있었습니다.
// 방문 목록에 1 추가
// 이 때 방문 목록이 [0,1]
// 4 먼저 들어가자!
// dfs(graph, 4, [0,1])
// 방문 목록에 [0,1,4]
// 4에는 [6]이 있습니다.
// 6방문
// 방문 목록에 6추가
// 6에는 인접 노드가 없음
// 이제 return이 이루어짐
// dfs(dfs(dfs(dfs())))
// 이제 여기서 반복문 4,5 중에 5를 시작할 것임.
// dfs(graph, 5, [0,1,4,6])
// 방문할 노드 없음
// 여기서 반복문 1,2,3중에 2시작
// dfs(graph,2,[0,1,4,6,5])
// 방문 목록에 [0,1,4,6,5,2]
// 여기서 반복문 1,2,3중에 3시작
// dfs(graph,2,[0,1,4,6,5,2])
// 방문 목록에 [0,1,4,6,5,2,3]

const result = DFS(graph, 0);
console.log(result); //[0, 1, 4, 6, 5, 2, 3]

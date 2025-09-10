function shortestPathLength(V, edges, start, end) {
  const adj = Array.from({ length: V }, () => []);
  for (let [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u); 
  }

  if (start === end) return 0;

  const visited = Array(V).fill(false);
  const queue = [[start, 0]]; 
  visited[start] = true;

  while (queue.length > 0) {
    const [node, dist] = queue.shift();

    for (let neighbor of adj[node]) {
      if (!visited[neighbor]) {
        if (neighbor === end) return dist + 1;
        visited[neighbor] = true;
        queue.push([neighbor, dist + 1]);
      }
    }
  }
  return -1;
}

//Test cases
// Test Case 1
console.log(shortestPathLength(5, [[0,1],[0,2],[1,3],[2,3],[3,4]], 0, 4)); 
// Test Case 2
console.log(shortestPathLength(3, [[0,1],[1,2]], 0, 2)); 
// Test Case 3
console.log(shortestPathLength(4, [[0,1],[1,2]], 2, 3)); 



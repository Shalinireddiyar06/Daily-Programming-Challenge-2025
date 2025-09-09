function hasCycle(V, edges) {
  const adj = Array.from({ length: V }, () => []);
  const seen = {};

  for (const [u, v] of edges) {
    const key = u < v ? `${u}-${v}` : `${v}-${u}`;
    if (seen[key]) return true;
    seen[key] = true;
    adj[u].push(v);
    adj[v].push(u);
  }

  const visited = Array(V).fill(false);

  function dfs(u, parent) {
    visited[u] = true;
    for (const v of adj[u]) {
      if (!visited[v]) {
        if (dfs(v, u)) return true;
      } else if (v !== parent) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < V; i++) {
    if (!visited[i] && dfs(i, -1)) return true;
  }

  return false;
}

// Test Cases
// Test Case 1
console.log(hasCycle(5, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]])); 
// Test Case 2
console.log(hasCycle(3, [[0, 1], [1, 2]])); 
// Test Case 3
console.log(hasCycle(4, [[0, 1], [1, 2], [2, 0]])); 

// Edge Cases
// Case 1
console.log(hasCycle(3, [])); 
// Case 2
console.log(hasCycle(4, [[0,1], [1,2], [2,3]])); 
// Case 3
console.log(hasCycle(3, [[0, 1], [1, 2], [2, 0], [0, 1]]));

function getNeighbors(row, col, graph) {
  let neighbors = [];
  // Check top
  if (row - 1 >= 0 && graph[row - 1][col] === 1) neighbors.push([row - 1, col]);
  // Check bottom
  if (row + 1 <= graph.length - 1 && graph[row + 1][col] === 1)
    neighbors.push([row + 1, col]);
  // Check left
  if (col - 1 >= 0 && graph[row][col - 1] === 1) neighbors.push([row, col - 1]);
  // Check right
  if (col + 1 <= graph[row].length - 1 && graph[row][col + 1] === 1)
    neighbors.push([row, col + 1]);
  // Return neighbors
  return neighbors;
  // Your code here
}

function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  let visited = new Set();
  // Create a stack, put the starting node in the stack
  // let node = [row, col];
  // console.log(node);
  let stack = [row, col];
  // console.log(stack);
  // Put the stringified starting node in visited
  visited.add([row, col].toString());
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length) {
    // Pop the first node
    let currNode = stack.pop();
    // let [crow, Ccol] = currNode;
    console.log(currNode);
    // DO THE THING (increment size by 1)
    size++;
    // Then push all the UNVISITED neighbors on top of the stack
    for (let neighbor of getNeighbors(row, col, graph)) {
      if (!visited.has(neighbor.toString())) {
        stack.push(neighbor);
        visited.add(neighbor.toString());
        // console.log(neighbor);
      }
    }
    // and mark them as visited
  }
  // HINT: This is what your helper function `getNeighbors` is for
  // HINT: Remember, you're storing your visited nodes as strings!
  return size;
  // Your code here
}

module.exports = [getNeighbors, islandSize];

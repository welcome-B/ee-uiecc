const PageRank = require('js-pagerank');

const adjacencyMatrix = [
    [0, 1, 1],
    [1, 0, 0],
    [0, 1, 0]
]

const pr = new PageRank(adjacencyMatrix)
pr.iterate()

// log the result
console.log(pr.result)
{
    iterations: 8;
    converged: true;
    pi: [ 0.38686228375569653, 0.3963085691243489, 0.21682914711995438 ];
    mappedResult: null
  }
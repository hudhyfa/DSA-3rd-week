// adjacent matrix;

const matrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
]

console.log(matrix[0][1]); // output 1
console.log(matrix[1][1]); // output 2

// adjacent list;

const list = {
    'A': ['B'],
    'B': ['A','C'],
    'C': ['B']
}

console.log(list['C']); // output ['B']
console.log(list['A']); // output ['B']

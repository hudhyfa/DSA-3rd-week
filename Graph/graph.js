class Graph {
    constructor() {
        this.adjacentList = {};
    }

    addVertex(vertex) {
        if(!this.adjacentList[vertex]) {
            this.adjacentList[vertex] = new Set();
        }
    }

    addEdges(vertex1, vertex2) {
        if(!this.adjacentList[vertex1]) {
            this.addVertex(vertex1);
        }
        if(!this.adjacentList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacentList[vertex1].add(vertex2);
        this.adjacentList[vertex2].add(vertex1);
    }

    hasEdge(vertex1, vertex2) {
        return this.adjacentList[vertex1].has(vertex2) && this.adjacentList[vertex2].has(vertex1);
        // we check both direction because the graph is undirected.
    }

    removeEdge(vertex1, vertex2) {
        this.adjacentList[vertex1].delete(vertex2);
        this.adjacentList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if(!this.adjacentList[vertex]) {
            return
        }
        for(let v of this.adjacentList[vertex]) {
            this.removeEdge(v, vertex);
        }
        delete this.adjacentList[vertex];
    }

    display() {
        for(let vertex in this.adjacentList) {
            console.log(vertex + " -> " + [...this.adjacentList[vertex]]);
        }
    }

    bfsTraverse(vertex) {
        let queue = new Array();
        let visited = new Array();
        queue.push(vertex);
        visited.push(vertex);
        while(queue.length) {
            let v = queue.shift();
            for(let vx of this.adjacentList[v]) {
                if(!visited.includes(vx)) {
                    visited.push(vx);
                    queue.push(vx);
                }
            }
        }
    }

    dfsTraverse(graph, vertex) {
        let visited = new Set();
        let result = new Array();
        
        function dfs(vertex) {
            if(visited.has(vertex) || !vertex) return;

            visited.add(vertex);
            result.push(vertex);

            for(let vx of graph.adjacentList[vertex]) {
                dfs(vx);
            }
        }
        dfs(vertex);
        console.log(result);
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdges("A", "B");
graph.addEdges("C", "B"); 
graph.addEdges("D", "B"); 
graph.addEdges("E", "D"); 
graph.addEdges("F", "D"); 

graph.dfsTraverse(graph, "B");


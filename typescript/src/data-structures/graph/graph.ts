export class Graph {
  private vertices: string[] = [];
  private adjList: { [key: string]: string[] } = {};

  public addVertex(vertex: string): void {
    if (!this.vertices.includes(vertex)) {
      this.vertices.push(vertex);
      this.adjList[vertex] = [];
    }
  }

  public addEdge(vertex1: string, vertex2: string): void {
    if (!this.adjList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjList[vertex1].push(vertex2);
    this.adjList[vertex2].push(vertex1);
  }

  public getVertices(): string[] {
    return this.vertices;
  }

  public getAdjList(): { [p: string]: string[] } {
    return this.adjList;
  }

  public toString(): string {
    let string = '';
    for (const vertex of this.vertices) {
      string += vertex + ' -> ';
      for (const neighbor of this.adjList[vertex]) {
        string += neighbor + ' ';
      }
      string += '\n';
    }
    return string;
  }
}

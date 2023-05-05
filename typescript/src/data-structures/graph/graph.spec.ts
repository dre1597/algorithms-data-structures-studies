import { describe, expect, it } from 'vitest';
import { Graph } from './graph';

const generateEmptyGraph = () => new Graph();

const generateNonEmptyGraph = () => {
  const graph = new Graph();
  graph.addVertex('any_data1');
  graph.addVertex('any_data2');
  graph.addEdge('any_data1', 'any_data2');
  return graph;
};

describe('Graph', () => {
  it('should add vertex', () => {
    const graph = generateEmptyGraph();

    graph.addVertex('any_data1');
    expect(graph.getVertices()).toEqual(['any_data1']);

    graph.addVertex('any_data2');
    expect(graph.getVertices()).toEqual(['any_data1', 'any_data2']);
  });

  it('should add edge', () => {
    const graph = generateEmptyGraph();

    graph.addVertex('any_data1');
    graph.addVertex('any_data2');

    graph.addEdge('any_data1', 'any_data2');
    expect(graph.getAdjList()).toEqual({
      any_data1: ['any_data2'],
      any_data2: ['any_data1'],
    });

    graph.addEdge('any_data3', 'any_data4');
    expect(graph.getAdjList()).toEqual({
      any_data1: ['any_data2'],
      any_data2: ['any_data1'],
      any_data3: ['any_data4'],
      any_data4: ['any_data3'],
    });
  });

  it('should toString', () => {
    const graph = generateNonEmptyGraph();

    expect(graph.toString()).toEqual(
      'any_data1 -> any_data2 \n' + 'any_data2 -> any_data1 \n',
    );
  });
});

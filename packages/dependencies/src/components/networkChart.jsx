import React, { useEffect, useState } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import dagre from 'dagre';

import { BaseCard } from '@catcode/core-components';
import { DeployableUnitNode } from './nodes';

const nodeTypes = { deployableUnit: DeployableUnitNode };

const nodeWidth = 172;
const nodeHeight = 36;

const DependencyGraph = ({ data }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setLinks] = useState([]);

  useEffect(() => {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));
    dagreGraph.setGraph({ rankdir: 'LR' });

    const graphNodes = data.map(d => ({
      id: d.id,
      type: 'deployableUnit',
      data: { label: `${d.system}.${d.application}.${d.deployableUnit}` },
      position: { x: 0, y: 0 },
    }));

    const graphLinks = data.flatMap(d => {
      return d.dependencies.map(dep => ({
        id: `${d.id}-${dep}`,
        source: d.id,
        target: dep,
        animated: true,
      }));
    });

    

    graphNodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });

    graphLinks.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    const updatedNodes = graphNodes.map((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      const {x, y} = nodeWithPosition;

      return {
        ...node,
        targetPosition: 'left',
        sourcePosition: 'right',
        position: {
          x: x - nodeWidth / 2,
          y: y - nodeHeight / 2,
        },
      };
    });

    setNodes(updatedNodes);
    setLinks(graphLinks);
  }, [data]);

  return (
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        nodeTypes={nodeTypes}
        fitView
        >
        <Controls />
      </ReactFlow>
  );
};

export default DependencyGraph;

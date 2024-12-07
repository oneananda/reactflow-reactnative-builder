import React, { useState } from 'react';
import ReactFlow, { addEdge, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
    { id: '1', type: 'input', data: { label: 'Start Page' }, position: { x: 250, y: 0 } },
];

const initialEdges = [];

const App = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onConnect={onConnect}
                fitView
            >
                <Controls />
            </ReactFlow>
        </div>
    );
};

export default App;

import React, { useState } from 'react';
import ReactFlow, { addEdge, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import Sidebar from './components/Sidebar';
import { nodeTypes } from './components/CustomNodes';
import { generateReactNativeCode } from './utils/codeGenerator';
import CodeGeneratorButton from './components/CodeGeneratorButton';

const initialNodes = [
    { id: '1', type: 'input', data: { label: 'Start Page' }, position: { x: 250, y: 0 } },
];

const initialEdges = [];

const App = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

    const onDrop = (event) => {
        const nodeType = event.dataTransfer.getData('application/reactflow');
        if (!nodeType) return;

        const position = { x: event.clientX, y: event.clientY };
        const newNode = {
            id: `${nodes.length + 1}`,
            type: nodeType,
            position,
            data: { label: `${nodeType} Node` },
        };
        setNodes((nds) => [...nds, newNode]);
    };

    const onGenerateCode = () => {
        const code = generateReactNativeCode(nodes);
        console.log('Generated Code:\n', code);
        alert('Check the console for the generated code!');
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar />
            <div style={{ flex: 1, position: 'relative' }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onConnect={onConnect}
                    onDrop={onDrop}
                    onDragOver={(event) => event.preventDefault()}
                    nodeTypes={nodeTypes}
                    fitView
                >
                    <Controls />
                </ReactFlow>
                <CodeGeneratorButton onGenerate={onGenerateCode} />
            </div>
        </div>
    );
};

export default App;

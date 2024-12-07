import React from 'react';
import { saveAs } from 'file-saver';

/**
 * CodeGeneratorButton Component
 * @param {function} onGenerate - Function to generate React Native code
 */
const CodeGeneratorButton = ({ onGenerate }) => {
    const handleExport = () => {
        const code = onGenerate();
        const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'GeneratedPage.js'); // Save as a .js file
    };

    return (
        <div style={{ display: 'flex', gap: '10px', margin: '10px' }}>
            <button
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#4caf50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={() => alert(onGenerate())} // Display code in an alert
            >
                Generate Code
            </button>
            <button
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#2196f3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={handleExport}
            >
                Export Code
            </button>
        </div>
    );
};

export default CodeGeneratorButton;

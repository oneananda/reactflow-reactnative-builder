import React from 'react';

/**
 * CodeGeneratorButton Component
 * @param {function} onGenerate - Function to generate and handle React Native code
 */
const CodeGeneratorButton = ({ onGenerate }) => {
    return (
        <button
            style={{
                margin: '10px',
                padding: '10px 20px',
                backgroundColor: '#4caf50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
            onClick={onGenerate}
        >
            Generate Code
        </button>
    );
};

export default CodeGeneratorButton;

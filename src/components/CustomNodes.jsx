import React from 'react';

/**
 * Custom node for Text component
 */
const TextNode = ({ data }) => {
    return (
        <div style={{ padding: '10px', border: '1px solid black', borderRadius: '5px' }}>
            <p>{data.label || 'Text'}</p>
        </div>
    );
};

/**
 * Custom node for Button component
 */
const ButtonNode = ({ data }) => {
    return (
        <div style={{ padding: '10px', border: '1px solid blue', borderRadius: '5px' }}>
            <button>{data.label || 'Button'}</button>
        </div>
    );
};

/**
 * Custom node for View component
 */
const ViewNode = ({ data }) => {
    return (
        <div style={{ padding: '20px', border: '1px dashed green', borderRadius: '5px' }}>
            <p>{data.label || 'View'}</p>
        </div>
    );
};

// Export node types
export const nodeTypes = {
    text: TextNode,
    button: ButtonNode,
    view: ViewNode,
};

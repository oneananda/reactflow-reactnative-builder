import React from 'react';
import './Sidebar.css'; // We'll add this file next for styling.

const Sidebar = () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside className="sidebar">
            <h3>Components</h3>
            <div
                className="draggable-item"
                onDragStart={(event) => onDragStart(event, 'text')}
                draggable
            >
                Text
            </div>
            <div
                className="draggable-item"
                onDragStart={(event) => onDragStart(event, 'button')}
                draggable
            >
                Button
            </div>
            <div
                className="draggable-item"
                onDragStart={(event) => onDragStart(event, 'view')}
                draggable
            >
                View
            </div>
        </aside>
    );
};

export default Sidebar;

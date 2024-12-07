/**
 * Generate React Native code from nodes
 * @param {Array} nodes - ReactFlow nodes
 * @returns {string} - Generated React Native code
 */
export const generateReactNativeCode = (nodes) => {
    return nodes
        .map((node) => {
            switch (node.type) {
                case 'text':
                    return `<Text>${node.data.label || 'Default Text'}</Text>`;
                case 'button':
                    return `<Button title="${node.data.label || 'Click Me'}" onPress={() => {}} />`;
                case 'view':
                    return `<View>${node.data.label || ''}</View>`;
                default:
                    return '';
            }
        })
        .join('\n');
};

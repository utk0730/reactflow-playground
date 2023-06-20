export function isValidNodeNetwork(nodes, edges) {
  const nodeIds = nodes.map((node) => node.id);
  const sourceNodes = edges.map((edge) => edge.source);
  let count = 0;
  for (let i = 0; i < nodeIds.length; i++) {
    if (!sourceNodes.includes(nodeIds[i])) count++;
  }
  return count < 2 ? true : false;
}

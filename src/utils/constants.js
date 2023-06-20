export const initialNodes = [
  {
    id: "1",
    type: "node",
    data: {
      heading: "Send Message",
      content: "Test message 1",
    },
    position: { x: 100, y: 100 },
  },
  {
    id: "2",
    type: "node",
    data: {
      heading: "Send Message",
      content: "Test message 2",
    },
    position: { x: 400, y: 400 },
  },
];

export const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
];

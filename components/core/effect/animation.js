const animation = ({ transition, transform }) => `
  ${transition ? `transition : ${transition};` : ""}
  ${transform ? `transform : ${transform};` : ""}
`;

export { animation };

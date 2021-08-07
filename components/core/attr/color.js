const color = ({ color, bgColor }) => `
  ${color && `color : ${color};`}
  ${bgColor && `background-color : ${bgColor};`}
`;

export { color };

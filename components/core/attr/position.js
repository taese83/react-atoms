const position = ({ position, zindex, top, right, bottom, left }) => `
  ${position && `position : ${position};`}
  ${zindex && `z-index : ${zindex};`}
  ${top && `top : ${top};`}
  ${right && `right : ${right};`}
  ${bottom && `bottom : ${bottom};`}
  ${left && `left : ${left};`}
`;

export { position };

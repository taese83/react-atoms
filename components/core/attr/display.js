const display = ({
  display,
  overflow,
  overflowX,
  overflowY,
  textOverflow,
  visibility,
  whiteSpace,
  theme,
}) =>
  `
  ${display && `display : ${display};`}
  ${overflow && `overflow : ${overflow};`}
  ${overflowX && `overflow-x : ${overflowX};`}
  ${overflowY && `overflow-y : ${overflowY};`}
  ${textOverflow && `text-overflow : ${textOverflow};`}
  ${visibility && `visibility : ${visibility};`}
  ${borderLeft && `border-left : ${borderLeft};`}
  ${whiteSpace && `whiteSpace : ${whiteSpace};`}
  `;

export { display };

const border = ({
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderColor,
  borderRadius,
  theme,
}) =>
  `
  ${border && `border : ${border};`}
  ${borderTop && `border-top : ${borderTop};`}
  ${borderRight && `border-right : ${borderRight};`}
  ${borderBottom && `border-bottom : ${borderBottom};`}
  ${borderLeft && `border-left : ${borderLeft};`}
  ${borderColor && `border-color : ${borderColor};`}
  ${borderRadius && `border-radius : ${borderRadius};`}
  `;

export { border };

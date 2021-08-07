const size = ({
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  boxSizing,
  theme,
}) => `
  ${width && `width : ${width};`}
  ${minWidth && `min-width : ${minWidth};`}
  ${maxWidth && `max-width : ${maxWidth};`}
  ${height && `height : ${height};`}
  ${minHeight && `min-height : ${minHeight};`}
  ${maxHeight && `max-height : ${maxHeight};`}
  ${boxSizing && `box-sizing : ${boxSizing};`}
`;

export { size };

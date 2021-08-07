const font = ({
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
}) => `
  ${fontFamily && `font-family: ${fontFamily}`}
  ${fontSize && `font-size : ${fontSize}`}
  ${fontWeight && `font-weight : ${fontWeight}`}
  ${letterSpacing && `letter-spacing : ${letterSpacing}`}
  ${lineHeight && `line-hgith : ${lineHeight}`}
  ${textAlign && `text-align : ${textAlign}`}
`;

export { font };

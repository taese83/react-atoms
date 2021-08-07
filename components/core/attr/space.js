const space = ({
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingleft,
  theme,
}) => `
  ${margin && `margin : ${margin};`}
  ${marginTop && `marign-top : ${marginTop};`}
  ${marginRight && `margin-right : ${marginRight};`}
  ${marginBottom && `margin-bottom : ${marginBottom};`}
  ${marginLeft && `margin-left : ${marginLeft};`}
  ${padding && `padding : ${padding};`}
  ${paddingTop && `padding-top : ${paddingTop};`}
  ${paddingRight && `padding-right : ${paddingRight};`}
  ${paddingBottom && `padding-bottom : ${paddingBottom};`}
  ${paddingleft && `padding-left : ${paddingleft};`}
`;

export { space };

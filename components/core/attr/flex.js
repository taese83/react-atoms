const flex = ({
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  order,
  flex,
  flexGrow,
  flexShrink,
  alignSelf,
  theme,
}) => `
${flexDirection && `flex-direction : ${flexDirection};`}
${flexWrap && `flex-wrap : ${flexWrap};`}
${justifyContent && `justify-content : ${justifyContent};`}
${alignItems && `align-items : ${alignItems};`}
${alignContent && `align-content : ${alignContent};`}
${order && `order : ${order};`}
${flex && `flex : ${flex};`}
${flexGrow && `flex-grow : ${flexGrow};`}
${flexShrink && `flex-shrink : ${flexShrink};`}
${alignSelf && `align-self : ${alignSelf};`}
`;

export { flex };

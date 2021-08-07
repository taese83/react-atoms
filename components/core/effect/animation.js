const animation = ({ transition, transform, media }) => `
  ${transition && `transition : ${transition}`}
  ${transform && `transform : ${transform}`}
  ${media && `${media}`}
`;

export { animation };

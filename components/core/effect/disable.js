const disabled = ({ disabled, theme }) => `
  opacity : ${disabled ? theme.main.color.disabled : 1};
  pointer-events : ${disabled ? "none" : ""};
`;

export { disabled };

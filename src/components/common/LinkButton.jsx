const { default: styled } = require("styled-components");
const { gradientBackground } = require("components/theme/palette");

const LinkButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  border-radius: 1.5rem;
  ${gradientBackground}
`;

export default LinkButton;

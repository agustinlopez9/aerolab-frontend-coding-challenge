import styled from "styled-components";
import { gradientBackground } from "components/theme/palette";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: ${props => props.width};
  height: ${props => props.height};
  cursor: pointer;
  border: none;
  border-radius: 1rem;
  ${gradientBackground}
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }
  span {
    color: #fff;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 150%;
  }
`;

export default Button;
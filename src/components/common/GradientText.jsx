import styled from "styled-components";
import { gradientBackground } from "components/theme/palette";

export const GradientText = styled.span`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-weight: ${(props) => props.fontWeight || "600"};
  font-size: ${(props) => props.fontSize || "1.125rem"};
  border-radius: 0.75rem;
  text-transform: ${(props) => props.textTransform || "none"};
  ${gradientBackground}
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  user-select: none;
  -webkit-user-select: none;
`;

export default GradientText;

import styled from "styled-components";
import { gradientBackground } from "components/theme/palette";

export const GradientText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.75rem;
  width: inherit;
  height: inherit;
  font-weight: 600;
  font-size: 1.125rem;
  ${gradientBackground}
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  user-select: none;
  -webkit-user-select: none;
`;

export default GradientText;

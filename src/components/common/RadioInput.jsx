import styled from "styled-components";
import GradientText from "./GradientText";

const RadioInputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 0.75rem;
  background-color: #e5f0ff;
  input {
    display: none;
  }
  input:checked ~ {
    span {
      background-clip: unset;
      -webkit-background-clip: unset;
      -webkit-text-fill-color: #fff;
    }
  }
`;

function RadioInput({ name, currentState, setState, value }) {
  return (
    <RadioInputLabel>
      <input
        type="radio"
        name={name}
        onClick={() => setState(value)}
        checked={currentState === value}
        value={value}
      />
      <GradientText>{value}</GradientText>
    </RadioInputLabel>
   );
}

export default RadioInput;
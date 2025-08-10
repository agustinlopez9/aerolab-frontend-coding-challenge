import styled from "styled-components";

export const PointsText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  width: inherit;
  height: inherit;
  background: #176feb;
  background: -webkit-linear-gradient(to right, #176feb 0%, #ff80ff 100%);
  background: -moz-linear-gradient(to right, #176feb 0%, #ff80ff 100%);
  background: linear-gradient(to right, #176feb 0%, #ff80ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  user-select: none;
  -webkit-user-select: none;
`;

const PointsItemLabel = styled.label`
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

function PointsItem({ points, setPoints, value }) {
  return (
    <PointsItemLabel>
      <input
        type="radio"
        name="points"
        onClick={() => setPoints(value)}
        checked={points === value}
        value={value}
      />
      <PointsText>{value}</PointsText>
    </PointsItemLabel>
   );
}

export default PointsItem;
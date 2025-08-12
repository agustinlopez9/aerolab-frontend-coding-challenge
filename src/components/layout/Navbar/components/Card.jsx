import styled from "styled-components";
import { Button, RadioInput } from "components/common";
import { AeropaySecondIcon, AeropayThirdIcon } from "assets/Icons";
import { CardWavePattern } from "assets/illustrations";

const AeropayMenu = styled.div`
  position: absolute;
  top: 6rem;
  right: 0;
  width: 312px;
  height: 404px;
  border-radius: 1rem;
  border: 1px solid #dae4f2;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  z-index: 20;
  .menu-title {
    display: block;
    text-align: left;
    color: #252f3d;
    font-size: 1.125rem;
    font-weight: 600;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #dae4f2;
  }
  .card {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    background-color: #252f3d;
    width: 264px;
    height: 148px;
    margin: 24px;
    border-radius: 0.5rem;
    padding: 1rem;
    font-weight: 600;
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .wave-pattern {
      display: flex;
      flex-direction: column;
      top: 0.1rem;
      bottom: 0px;
      left: 0px;
      right: 0px;
      position: absolute;
      background-repeat: repeat;
      background-image: url(${CardWavePattern});
      background-position: top -20px center;
      background-size: 300px;
    }
  }
  .points-selector {
    display: flex;
    width: 264px;
    height: 35px;
    gap: 0.25rem;
    margin: 2.75rem auto 1.5rem auto;
  }
`;

const Points = [1000, 5000, 7500];

function Card({ points, setPoints, handleAddPoints, user }) {
  return (
    <AeropayMenu>
      <span className="menu-title">Add balance</span>
      <div className="card">
        <div>
          <span>Aerocard</span>
          <AeropaySecondIcon />
        </div>
        <div>
          <span>{user && user.name}</span>
          <span>07/23</span>
        </div>
        <div className="wave-pattern"></div>
      </div>
      <form>
        <div className="points-selector">
          {Points.map((value) => (
            <RadioInput
              key={value}
              name="points"
              title={value}
              currentState={points}
              setState={setPoints}
              value={value}
            />
          ))}
        </div>
        <Button width="264px" height="51px" onClick={handleAddPoints}>
          <div>
            <AeropayThirdIcon />
            <span>Add Points</span>
          </div>
        </Button>
      </form>
    </AeropayMenu>
  );
}

export default Card;

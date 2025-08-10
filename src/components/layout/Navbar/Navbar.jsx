import { useRef, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useClickOutside } from "hooks";
import { useInfo } from "../../../context/userContext";

import PointsItem, { PointsText } from "./components/PointsItem";
import { addPoints, getUser } from "../../../services/userService";
import {
  AerolabLogo,
  AeropayFirstIcon,
  AeropaySecondIcon,
  AeropayThirdIcon,
  MenuActiveIcon,
  MenuIcon
} from "assets/icons";
import WavePattern from "assets/illustrations/wave-pattern.png";

const Header = styled.header`
  display: flex;
  position: relative;
  margin: 0 auto;
  padding: 1rem 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  img {
    user-select: none;
    -webkit-user-select: none;
  }
`;

const PointsButton = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 16px;
  width: 172px;
  height: 48px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  text-align: center;
  border: 1px solid #dae4f2;
  border-radius: 1rem;
  img {
    width: 32px;
  }
  z-index: 20;
  .menu-icon {
    width: 1.25rem;
    margin-left: 0.5rem;
    user-select: none;
  }
  .active {
    transform: rotate(-90deg);
  }
  .disabled {
    transform: rotate(90deg);
  }
`;

const AeropayMenu = styled.div`
  position: absolute;
  top: 4.5rem;
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
      background-image: url(${WavePattern});
      background-position: top -20px center;
      background-size: 300px;
    }
  }
  .points-selector {
    display: flex;
    width: 264px;
    height: 35px;
    gap: 0.25rem;
    margin: 2.75rem auto 0 auto;
  }
`;

const StyledAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 264px;
  height: 51px;
  margin: 1.5rem;
  border: none;
  border-radius: 1rem;
  background: #176feb;
  background: -webkit-linear-gradient(to right, #176feb 0%, #ff80ff 100%);
  background: -moz-linear-gradient(to right, #176feb 0%, #ff80ff 100%);
  background: linear-gradient(to right, #176feb 0%, #ff80ff 100%);
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    width: 134px;
    height: 27px;
  }
  span {
    color: #fff;
    font-weight: 600;
    font-size: 1.125rem;
    width: 102px;
    height: inherit;
    line-height: 150%;
  }
`;

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [points, setPoints] = useState(1000);
  const menuRef = useRef();
  const { user, setUser } = useInfo();
  useClickOutside(menuRef, setMenu);

  const handleAddPoints = (e) => {
    e.preventDefault();
    addPoints(points)
      .then((response) => {
        // Get user again to update points
        async function getData() {
          const user = await getUser();
          setUser(user.data);
        }
        getData();
        toast.success("Points added!");
      })
      .catch((err) => {
        toast.error("There was a problem with the request");
        console.log(err);
      });
  };

  return (
    <Header ref={menuRef}>
      <img width="126px" src={AerolabLogo} alt="aerolab-logo-1.svg" />
      <PointsButton onClick={() => setMenu(!menu)}>
        <img src={AeropayFirstIcon} alt="aeropay-1.svg" width="32px" height="32px" />
        <PointsText>{user && user.points}</PointsText>
        <img
          alt="menu-icon"
          className={`menu-icon ${menu ? "active" : "disabled"}`}
          src={menu ? MenuActiveIcon : MenuIcon}
        />
      </PointsButton>
      {menu && (
        <AeropayMenu>
          <span className="menu-title">Add balance</span>
          <div className="card">
            <div>
              <span>Aerocard</span>
              <img alt="aeropay-2.svg" src={AeropaySecondIcon} width="24px" height="24px"/>
            </div>
            <div>
              <span>{user && user.name}</span>
              <span>07/23</span>
            </div>
            <div className="wave-pattern"></div>
          </div>
          <form>
            <div className="points-selector">
              <PointsItem setPoints={setPoints} points={points} value={1000} />
              <PointsItem setPoints={setPoints} points={points} value={5000} />
              <PointsItem setPoints={setPoints} points={points} value={7500} />
            </div>
            <StyledAddButton onClick={handleAddPoints}>
              <div>
                <img src={AeropayThirdIcon} alt="aeropay-3.svg" width="24px" height="24px" />
                <span>Add Points</span>
              </div>
            </StyledAddButton>
          </form>
        </AeropayMenu>
      )}
    </Header>
  );
}

export default Navbar;

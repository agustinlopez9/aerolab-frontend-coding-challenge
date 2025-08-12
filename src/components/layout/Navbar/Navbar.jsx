import { useRef, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useClickOutside } from "hooks";
import { useUserContext } from "context";

import { GradientText } from "components/common";
import Card from "./components/Card";
import {
  AerolabLogoIcon,
  AeropayFirstIcon,
  MenuActiveIcon,
  MenuIcon,
} from "assets/Icons";
import { addPoints, getUser } from "services/userService";

const Header = styled.header`
  display: flex;
  position: relative;
  margin: 0 auto;
  padding: 2.5rem 0;
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
  width: 100%;
  max-width: 172px;
  height: 48px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  text-align: center;
  border: 1px solid #dae4f2;
  border-radius: 1rem;
  z-index: 20;
  img {
    width: 32px;
  }
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

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [points, setPoints] = useState(1000);
  const menuRef = useRef();
  const { user, setUser } = useUserContext();
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
      <AerolabLogoIcon width="126px" />
      <PointsButton onClick={() => setMenu(!menu)}>
        <AeropayFirstIcon height="32px" />
        <GradientText>{user ? user.points : "-"}</GradientText>
        {menu ? (
          <MenuActiveIcon className="menu-icon active" />
        ) : (
          <MenuIcon className="menu-icon disabled" />
        )}
      </PointsButton>
      {menu && (
        <Card
          points={points}
          setPoints={setPoints}
          handleAddPoints={handleAddPoints}
          user={user}
        />
      )}
    </Header>
  );
}

export default Navbar;

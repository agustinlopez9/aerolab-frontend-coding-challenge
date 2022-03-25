import { useRef, useState } from "react";
import styled from "styled-components";
import { useInfo } from "../../context/userContext";
import { addPoints, getUser } from "../../services/userService";
import { toast } from "react-toastify";
import useClickOutside from "./../../hooks/useClickOutside";

const Header = styled.header`
    display: flex;
    position: relative;
    margin: 0 auto;
    padding: 1rem 0;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1464px;
`;

const PointsButton = styled.div`
    display: flex;
    background-color: #fff;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
    text-align: center;
    padding: 8px 16px 8px 16px;
    width: 138px;
    height: 30px;
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

const PointsText = styled.span`
    margin: 0 0.25rem;
    font-size: 1.125rem;
    font-weight: 600;
    background: #176feb;
    background: -webkit-linear-gradient(to right, #176feb 0%, #ff80ff 100%);
    background: -moz-linear-gradient(to right, #176feb 0%, #ff80ff 100%);
    background: linear-gradient(to right, #176feb 0%, #ff80ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Menu = styled.div`
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
        margin: 1.5rem auto;
        width: 232px;
        height: 116px;
        border-radius: 0.5rem;
        padding: 1rem;
        font-weight: 600;
        div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        div:nth-child(1) {
            font-size: 1.125rem;
        }
        div:nth-child(2) {
            font-size: 0.825rem;
        }
        .wave-pattern {
            display: flex;
            flex-direction: column;
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;
            position: absolute;
            background-repeat: repeat;
            background-image: url("/assets/illustrations/wave-pattern.png");
            background-position: top -20px center;
            background-size: 300px;
        }
    }
    .points-selector {
        display: flex;
        width: 272px;
        justify-content: center;
        margin: 2.25rem auto 0.5rem auto;
        label {
            cursor: pointer;
            display: flex;
            align-items: center;
            border-radius: 0.75rem;
            width: 100%;
            margin: 0.25rem;
        }
        .input-text {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.25rem 0.5rem;
            text-align: center;
            height: 27px;
            width: 100%;
            background-color: #e5f0ff;
            border-radius: 0.75rem;
        }
        input {
            display: none;
        }
        input:checked ~ .input-text {
            background: #176feb;
            background: -webkit-linear-gradient(to right, #176feb 0%, #ff80ff 100%);
            background: -moz-linear-gradient(to right, #176feb 0%, #ff80ff 100%);
            background: linear-gradient(to right, #176feb 0%, #ff80ff 100%);
            span {
                -webkit-text-fill-color: #fff;
            }
        }
    }
`;

const StyledAddButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;
    font-size: 1.125rem;
    font-weight: 600;
    width: 264px;
    height: 51px;
    margin: 1.5rem auto;
    border: none;
    border-radius: 1rem;
    background: #176feb;
    background: -webkit-linear-gradient(to right, #176feb 0%, #ff80ff 100%);
    background: -moz-linear-gradient(to right, #176feb 0%, #ff80ff 100%);
    background: linear-gradient(to right, #176feb 0%, #ff80ff 100%);
    img {
        margin: 0.5rem;
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
            <img width={"126px"} src={process.env.PUBLIC_URL + "/assets/icons/aerolab-logo-1.svg"} alt="Logo" />
            <PointsButton onClick={() => setMenu(!menu)}>
                <img alt="logo-menu" src={process.env.PUBLIC_URL + "/assets/icons/aeropay-1.svg"} />
                <PointsText>{user && user.points}</PointsText>
                <img
                    alt="menu-icon"
                    className={`menu-icon ${menu ? "active" : "disabled"}`}
                    src={process.env.PUBLIC_URL + `/assets/icons/${menu ? "chevron-active" : "chevron-default"}.svg`}
                />
            </PointsButton>
            {menu && (
                <Menu>
                    <span className="menu-title">Add balance</span>
                    <div className="card">
                        <div>
                            <span>Aerocard</span>
                            <img
                                alt="card-icon"
                                src={process.env.PUBLIC_URL + "/assets/icons/aeropay-2.svg"}
                                width="24px"
                            />
                        </div>
                        <div>
                            <span>{user && user.name}</span>
                            <span>07/23</span>
                        </div>
                        <div className="wave-pattern"></div>
                    </div>
                    <form>
                        <div className="points-selector">
                            <label>
                                <input type="radio" name="points" onClick={() => setPoints(1000)} value="1000" />
                                <div className="input-text">
                                    <PointsText>1000</PointsText>
                                </div>
                            </label>
                            <label>
                                <input type="radio" name="points" onClick={() => setPoints(5000)} value="5000" />
                                <div className="input-text">
                                    <PointsText>5000 </PointsText>
                                </div>
                            </label>
                            <label>
                                <input type="radio" name="points" onClick={() => setPoints(7500)} value="7500" />
                                <div className="input-text">
                                    <PointsText>7500</PointsText>
                                </div>
                            </label>
                        </div>
                        <StyledAddButton onClick={(e) => handleAddPoints(e)}>
                            <img src={process.env.PUBLIC_URL + "/assets/icons/aeropay-3.svg"} alt="Logo" />
                            Add Points
                        </StyledAddButton>
                    </form>
                </Menu>
            )}
        </Header>
    );
}

export default Navbar;

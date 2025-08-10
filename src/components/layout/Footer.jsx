import styled from "styled-components";
import { GithubIcon } from "assets/icons";

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  max-width: 1464px;
  margin: 0 auto;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 150%;
  img {
    margin: 0.5rem;
  }
  a {
    color: #7c899c;
    text-decoration: none;
  }
`;

function Footer() {
  return (
    <Bottom>
      <img
        src={GithubIcon}
        alt="github-default.svg"
      />
      <a
        href="https://github.com/agustinlopez9/aerolab-frontend-coding-challenge"
        target="_blank"
        rel="noreferrer"
      >
        View this repository
      </a>
    </Bottom>
  );
}

export default Footer;

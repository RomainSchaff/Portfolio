import Links from "../../components/Routes/Links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "./Navbar.scss";
import { useState } from "react";

export const StyledLink = styled.a`
  transition: all 0.3s;
  font-size: 20px;
  margin: 10px;
  ${(props) =>
    props.$isAboutLink &&
    `
    font-weight: normal;
    color: white;
      text-decoration: underline;
    :hover{
      -webkit-text-stroke: 1px;
      -webkit-text-stroke-color: #ec4e20;
    }
    `}
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-nav">
        <div className="desktop-menu">
          <Links about="false" />
          <Links page="Portfolio" about="false" />
          <a
            href="https://www.linkedin.com/in/romain-schaff-0892a419b/"
            target="_blank"
            rel="noreferrer"
            className="nav-icon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/RomainSchaff?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="nav-icon"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? (
            <FontAwesomeIcon icon={faAngleDown} className="nav-icon" />
          ) : (
            <>
              <FontAwesomeIcon icon={faAngleUp} className="nav-icon" />
              <ul className="dropdown-menu">
                <li>
                  <Links about="false" />
                </li>
                <li>
                  <Links page="Portfolio" about="false" />
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/romain-schaff-0892a419b/"
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/RomainSchaff?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

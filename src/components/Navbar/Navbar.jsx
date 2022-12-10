import Links from "../../components/Routes/Links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import StyledHTMLlinka from "../utils/Styledlink";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-nav">
        <div className="desktop-menu">
          <Links page="About" about="false" />
          <Links page="Portfolio" about="false" />
          <StyledHTMLlinka
            url="https://www.linkedin.com/in/romain-schaff-0892a419b/"
            name="nav-icon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </StyledHTMLlinka>
          <StyledHTMLlinka
            url="https://github.com/RomainSchaff?tab=repositories"
            name="nav-icon"
          >
            <FontAwesomeIcon icon={faGithub} />
          </StyledHTMLlinka>
        </div>
        <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? (
            <FontAwesomeIcon icon={faAngleDown} className="nav-icon" />
          ) : (
            <>
              <FontAwesomeIcon icon={faAngleUp} className="nav-icon" />
              <ul className="dropdown-menu">
                <li>
                  <Links page="About" about="false" />
                </li>
                <li>
                  <Links page="Portfolio" about="false" />
                </li>
                <li>
                  <StyledHTMLlinka
                    url="https://www.linkedin.com/in/romain-schaff-0892a419b/"
                    name="nav-icon"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </StyledHTMLlinka>
                </li>
                <li>
                  <StyledHTMLlinka
                    url="https://github.com/RomainSchaff?tab=repositories"
                    name="nav-icon"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </StyledHTMLlinka>
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

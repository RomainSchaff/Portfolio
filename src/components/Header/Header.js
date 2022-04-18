import styled from "styled-components";
import "./Header.css";
import Links from "../Routes/Links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const StyledLink = styled.a`
  color: #8c8c8c;
  text-decoration: none;
  margin: 10px;
  transition: all 0.3s;
  ${(props) =>
    props.$isIconLink &&
    `
    font-size: 40px;
    margin: 10px;
    `}
  ${(props) =>
    props.$isAboutLink &&
    `
    font-weight: normal;
    color: white;
      text-decoration: underline;
    :hover{
      -webkit-text-stroke: 1px;
      -webkit-text-stroke-color: rgb(255, 187, 0);
    }
    `}
`;

function Header() {
  let words = [
    "Front-End : React",
    "Back-End : Nodejs",
    "SEO",
    "Accessibilité",
  ];
  let part;
  let i = 0;
  let offset = 0;
  let len = words.length;
  let forwards = true;
  let skipCount = 0;
  let skipDelay = 50;
  let speed = 50;

  function wordflick() {
    setInterval(function () {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skipCount;
          if (skipCount === skipDelay) {
            forwards = false;
            skipCount = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = words[i].substring(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      document.getElementById("comp").innerText = " > " + part;
    }, speed);
  }
  wordflick();

  return (
    <>
      <div className="header">
        <div className="title">
          <h1>
            <span>Romain</span> SCHAFF
          </h1>
          <p id="comp"></p>
        </div>
        <div>
          <Links about="false" />
          <Links page="Portfolio" about="false" />
          <StyledLink
            $isIconLink
            href="https://www.linkedin.com/in/romain-schaff-0892a419b/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </StyledLink>
          <StyledLink
            $isIconLink
            href="https://github.com/RomainSchaff?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </StyledLink>
        </div>
      </div>
    </>
  );
}

export default Header;

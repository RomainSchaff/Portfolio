import profil from "../../assets/photoprofil.jpg";
import styled from "styled-components";
import "./About.scss";
import Links from "../../components/Routes/Links";
import StyledHTMLlinka from "../../components/utils/Styledlink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faEnvelope,
  faCalendarCheck,
  faCompass,
} from "@fortawesome/free-regular-svg-icons";
import {
  faDatabase,
  faMusic,
  faPersonBiking,
  faUserGroup,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faJs,
  faSass,
  faBootstrap,
  faReact,
  faNodeJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const StyledProfil = styled.img`
  float: left;
  height: 360px;
  width: 250px;
  margin-right: 30px;
  border: 4px solid white;
  transition: all 0.5s;
  :hover {
    transform: scale(1.05);
  }
  @media (max-width: 800px) {
    float: none;
    margin-right: 0px;
  }
`;

const StyledAbout = styled.div`
  font-size: 22px;
  font-style: bold;
  display: flex;
  flex-wrap: wrap;
  width: auto;
  margin: 0px;
  padding: 150px 15% 100px 15%;
  transition: all 0.5s;
  ${(props) =>
    props.$isNextDiv &&
    `
    padding-top: 50px;
    padding-bottom: 100px;
    flex-direction: column;
    align-items: flex-start;
    `}
  @media(max-width: 1200px) {
    padding: 150px 10% 50px 10%;
  }
  @media (max-width: 800px) {
    padding: 150px 3% 50px 3%;
  }
`;

const StyledPresentation = styled.p`
  font-size: 24px;
  padding: 15px;
  margin: 25px;
  border: 1px solid white;
  background-color: #2f2e33;
`;

function Home() {
  return (
    <>
      <StyledAbout>
        <div className="introducing">
          <p className="welcome">Bienvenue !</p>
          <StyledProfil src={profil} alt="PhotoDeProfil" />
          <p>
            <br /> Je suis <span className="bold-words">R</span>omain{" "}
            <span className="bold-words">S</span>chaff,
            <br />
            développeur fullstack junior.
            <br />
            <br />
            J'aime coder et donner vie à des maquettes.
            <br />
            <br />
            Ce site est codé avec <span className="bold-words">React</span> que
            j'apprécie beaucoup.
            <br />
            <br /> Vous pouvez aller jeter un oeil sur mes réalisations dans la
            parti
            <Links page="portfolio" />
            si vous le souhaitez.
            <br />
            <br />
            Si mon profil vous intéresse ou pour simplement discuter
            <StyledHTMLlinka
              url="mailto:romainschaff2612@gmail.com"
              name="aboutLink"
            >
              contactez-moi.
            </StyledHTMLlinka>
          </p>
        </div>
      </StyledAbout>
      <StyledAbout $isNextDiv>
        <h3>Compétences</h3>
        <div className="skilldiv">
          <div className="compsDiv">
            <h4>Programmation</h4>
            <div>
              <span className="lang">
                <FontAwesomeIcon icon={faHtml5} />
                HTML5
              </span>
              <span className="lang">
                <FontAwesomeIcon icon={faCss3} />
                CSS3
              </span>
              <span className="lang">
                <FontAwesomeIcon icon={faJs} />
                Javascript
              </span>
              <span className="lang">
                <FontAwesomeIcon icon={faDatabase} />
                SQL
              </span>
            </div>
            <div>
              <span className="framework">
                <FontAwesomeIcon icon={faReact} />
                ReactJS
              </span>
              <span className="framework">
                <FontAwesomeIcon icon={faSass} />
                Sass
              </span>
              <span className="framework">
                <FontAwesomeIcon icon={faBootstrap} />
                BootStrap
              </span>
              <span className="framework">
                <FontAwesomeIcon icon={faNodeJs} />
                NodeJS
              </span>
            </div>
            <div>
              <span className="tools">
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </span>
              <span className="tools">Lighthouse</span>
              <span className="tools">VScode</span>
              <span className="tools">Redux</span>
            </div>
          </div>
          <div className="compsDiv">
            <h4>Soft skills</h4>
            <div>
              <p>
                <span className="softskills">Persévérant</span>
              </p>
              <p>
                <span className="softskills">Curieux</span>
              </p>
              <p>
                <span className="softskills">Solidaire</span>
              </p>
              <p>
                <span className="softskills">Autonome</span>
              </p>
            </div>
          </div>
        </div>
      </StyledAbout>
      <StyledAbout $isNextDiv>
        <h3>A propos</h3>
        <div className="infodiv">
          <p>
            Je suis passioné par la conception et la réalisation de sites web.
            <br />
            Mon attachement au développement et ma curiosité me permettent de
            toujours être à la recherche de nouvelles méthodes pour concevoir
            des sites agréable aux utilisateurs.
          </p>
          <div className="infos">
            <StyledPresentation>
              <FontAwesomeIcon icon={faCalendarCheck} /> 27 ans né le 26/12/1994
            </StyledPresentation>
            <StyledPresentation>
              <FontAwesomeIcon icon={faCompass} /> habite à Sète (34 200)
            </StyledPresentation>
            <StyledPresentation>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <StyledHTMLlinka
                url="mailto:romainschaff2612@gmail.com"
                name="aboutLink"
              >
                romainschaff2612@gmail.com
              </StyledHTMLlinka>
            </StyledPresentation>
            <StyledPresentation>
              <FontAwesomeIcon icon={faMessage} /> 06 45 99 05 14
            </StyledPresentation>
          </div>
        </div>
      </StyledAbout>
      <StyledAbout $isNextDiv>
        <h3>Expériences et Formations</h3>
        <div className="experiencediv">
          <h4>Diplômes</h4>
          <div className="diplomediv">
            <div className="diplome">
              <p>Titre RNCP avec Openclassroom</p>
              <p>Formation développeur web équivalent Bac+2.</p>
            </div>
            <div className="diplome">
              <p>Bac Scientifique</p>
              <p>Au lycée Albert Triboulet à Romans-sur-Isère dans la drôme.</p>
            </div>
            <div className="diplome">
              <p>Licence 1 de physique-chimie</p>
              <p>A l'université Joseph Fourier à Valence.</p>
            </div>
          </div>
        </div>
      </StyledAbout>
      <StyledAbout $isNextDiv>
        <h3>Services</h3>
        <div className="servicediv">
          <div className="service">
            <FontAwesomeIcon icon={faCode} />
            <p>Web Development</p>
            <p>
              Développement de fonctionnalités front-end et back-end pour des
              projets web.
            </p>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faUserGroup} />
            <p>Ux Design</p>
            <p>
              Amélioration de l'expérience utilisateur en prenant en compte la
              diversité et les exigences.
            </p>
          </div>
        </div>
      </StyledAbout>
      <StyledAbout $isNextDiv>
        <h3>Centre d'intérêts</h3>
        <div className="fundiv">
          <div>
            <FontAwesomeIcon icon={faMusic} />
            <p>Musique: Batterie & Trompette</p>
            <p className="hobby-desc">
              Ce loisir me permet de m'exprimer et de m'amuser.
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPersonBiking} />
            <p>Sport: Vélo & Football</p>
            <p className="hobby-desc">
              Ces sports me permettent de me structurer et de me dépasser.
            </p>
          </div>
        </div>
      </StyledAbout>
      <div className="copyright">© 2022 Romain SCHAFF</div>
    </>
  );
}

export default Home;

import profil from "../../assets/photoprofil.jpg";
import styled from "styled-components";
import "./About.css";
import Links from "../../components/Routes/Links";
import { StyledLink } from "../../components/Header/Header";
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
  height: 420px;
  width: 250px;
  margin-right: 30px;
  border: 4px solid white;
  transition: all 0.5s;
  :hover {
    transform: scale(1.05);
  }
`;

const StyledAbout = styled.div`
  font-size: 22px;
  font-style: bold;
  display: flex;
  width: auto;
  padding: 200px 150px 100px 150px;
  transition: all 0.5s;
  ${(props) =>
    props.$isNextDiv &&
    `
    padding-top: 50px;
    padding-bottom: 100px;
    flex-direction: column;
    align-items: flex-start;
    `}
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
          <StyledProfil src={profil} alt="PhotoDeProfil" />
          <h2 className="welcome">Bonjour et bienvenue !</h2>
          <p>
            <br /> Je suis <span className="bold-words">Romain Schaff</span>,
            <br />
            développeur <span className="bold-words">Fullstack</span> junior.
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
            Si mon profil vous intéresse ou pour simplement dire bonjour
            <StyledLink href="mailto:romainschaff2612@gmail.com" $isAboutLink>
              contactez-moi.
            </StyledLink>
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
                <span className="softskills">Détermination</span>
              </p>
              <p>
                <span className="softskills">Curiosité</span>
              </p>
              <p>
                <span className="softskills">Solidarité</span>
              </p>
              <p>
                <span className="softskills">Autonomie</span>
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
              <StyledLink href="mailto:romainschaff2612@gmail.com" $isAboutLink>
                romainschaff2612@gmail.com
              </StyledLink>
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
            <p className="diplome">
              Titre RNCP équivalent Bac+2 après ma formation chez Openclassroom.
            </p>
            <p className="diplome">
              Bac Scientifique au lycée Albert Triboulet à Romans-sur-Isère dans
              la drôme.
            </p>
            <p className="diplome">
              Première année de Licence de physique-chimie à l'université Joseph
              Fourier à Valence.
            </p>
          </div>
          <h4>Projets Professionnels</h4>
          <div className="diplomediv">
            <p className="diplome">Plusieurs projets de dévoppement web</p>
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

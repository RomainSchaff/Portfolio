import styled from "styled-components";
import "./Portfolio.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { StyledLink } from "../../components/Navbar/Navbar";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import Slideshow from "../../components/Slider/Slider";
import { Images } from "../../components/portfolioImage/portfolio";

const StyledSite = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 75vh;
  padding: 100px 8% 0 8%;
  @media (max-width: 1200px) {
    margin-right: 0px;
    align-items: center;
    padding: 50px 0 0 0;
  }
  ${(props) =>
    props.$isFirstSite &&
    `
    `}
  ${(props) =>
    props.$isSecondSite &&
    `
    align-items: flex-end;
    @media (max-width: 1200px) {
      .project-container{
      flex-direction: column-reverse;
    }
  }
  }
    `}
  ${(props) =>
    props.$isThirdSite &&
    `
    `}
  ${(props) =>
    props.$isFourthSite &&
    `
    align-items: flex-end;
    @media (max-width: 1200px) {
      .project-container{
      flex-direction: column-reverse;
    }
  }
    `}
  ${(props) =>
    props.$isFifthSite &&
    `
    `}
  ${(props) =>
    props.$isSixthSite &&
    `
    align-items: flex-end;
    @media (max-width: 1200px) {
      .project-container{
      flex-direction: column-reverse;
    }
  }
    `}
`;

function Portfolio() {
  return (
    <>
      <StyledSite $isFirstSite>
        <h2>Projet n°1 : Reservia</h2>
        <div className="project-container">
          <Slideshow images={Images.ImagesProjet1} />
          <div className="desc-icones-container">
            <p>
              Mon premier projet consistait à créer un site de location
              d'appartement, de chambre d'hôtel etc... <br />
              Le site est responsive et constitué d'une seule page.
            </p>
            <p>Langages utilisés: HTML, CSS</p>
            <div>
              <StyledLink
                $isIconLink
                href="https://romainschaff.github.io/RomainSchaff_2_08032021/#h%C3%A9bergements"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEye} className="link" />
              </StyledLink>
              <StyledLink
                $isIconLink
                href="https://github.com/RomainSchaff/RomainSchaff_2_08032021"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="link" />
              </StyledLink>
            </div>
          </div>
        </div>
      </StyledSite>
      <StyledSite $isSecondSite>
        <h2>Projet n°2 : Ohmyfood</h2>
        <div className="project-container">
          <div className="desc-icones-container">
            <p>
              Mon deuxième projet était un site pour présenter et commander les
              menus d'un restaurant.
              <br /> J'ai utilisé des animations tel que les transitions et les
              keyframes.
            </p>
            <p>Langages utilisés: HTML, CSS, Sass</p>
            <div>
              <StyledLink
                $isIconLink
                href="https://romainschaff.github.io/RomainSchaff_3_01042021/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEye} className="link" />
              </StyledLink>
              <StyledLink
                $isIconLink
                href="https://github.com/RomainSchaff/RomainSchaff_3_01042021"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="link" />
              </StyledLink>
            </div>
          </div>
          <Slideshow images={Images.ImagesProjet2} />
        </div>
      </StyledSite>
      <StyledSite $isThirdSite>
        <h2>Projet n°3 : La chouette agence</h2>
        <div className="project-container">
          <Slideshow images={Images.ImagesProjet3} />
          <div className="desc-icones-container">
            <p>
              Travail sur le SEO et l'Accessibilité. <br />
              Correction des erreurs selon les critères WCAG.
            </p>
            <p>
              Outils utilisés: Axe DevTools, LightHouse, Wave Evaluation Tool,
              HeadingsMap
            </p>
            <div>
              <StyledLink
                $isIconLink
                href="https://romainschaff.github.io/RomainSchaff_04_01052021_V2/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEye} className="link" />
              </StyledLink>
              <StyledLink
                $isIconLink
                href="https://github.com/RomainSchaff/RomainSchaff_04_01052021_V2"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="link" />
              </StyledLink>
            </div>
          </div>
        </div>
      </StyledSite>
      <StyledSite $isFourthSite>
        <h2>Projet n°4 : Orinocamera</h2>
        <div className="project-container">
          <div className="desc-icones-container">
            <p>
              Mon premier projet Javascript.
              <br /> J'ai utilisé une API publique pour afficher les produits et
              gérer les commandes.
            </p>
            <p>Langages utilisés: JavaScript</p>
            <div>
              <StyledLink
                $isIconLink
                href="https://romainschaff.github.io/RomainSchaff_05_15092021/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEye} className="link" />
              </StyledLink>
              <StyledLink
                $isIconLink
                href="https://github.com/RomainSchaff/RomainSchaff_05_15092021"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="link" />
              </StyledLink>
            </div>
          </div>
          <Slideshow images={Images.ImagesProjet4} />
        </div>
      </StyledSite>
      <StyledSite $isFifthSite>
        <h2>Projet n°5 : Piiquante</h2>
        <div className="project-container">
          <Slideshow images={Images.ImagesProjet5} />
          <div className="desc-icones-container">
            <p>
              Création d'une API et configuration d'une base de donnée. <br />
              J'ai enregistré mes différentes sauces piquante et créé les
              requêtes adéquat.
            </p>
            <p>Langages utilisés: JavaScript avec NodeJS</p>
            <p>Base de donnée: MongoDB</p>
            <div>
              <StyledLink
                $isIconLink
                href="https://github.com/RomainSchaff/RomainSchaff_P6"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="link" />
              </StyledLink>
            </div>
          </div>
        </div>
      </StyledSite>
      <StyledSite $isSixthSite>
        <h2>Projet n°6 : Groupomania</h2>
        <div className="project-container">
          <div className="desc-icones-container">
            <p>
              Le réseau social d'une entreprise.
              <br /> J'ai conçu le back et le front pour ce projet en utilisant
              SQL et React. <br />
              Il est composé d'une page publication et d'une page profil.
            </p>
            <p>Langages utilisés: JavaScript avec ReactJS</p>
            <p>Base de donnée: SQL (mySQL)</p>
            <div>
              <StyledLink
                $isIconLink
                href="https://github.com/RomainSchaff/RomainSchaff_07_11122021"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="link" />
              </StyledLink>
            </div>
          </div>
          <Slideshow images={Images.ImagesProjet6} />
        </div>
      </StyledSite>
    </>
  );
}

export default Portfolio;

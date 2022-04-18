import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-weight: normal;
  font-size: 25px;
  margin: 10px;
  text-decoration: none;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(1.1);
  }
  ${(props) =>
    props.$isAboutLink &&
    `
    color: white;
    text-decoration: underline;
    font-weight: normal;
    :hover{
      color: #1e2a42;
      -webkit-text-stroke: 1px;
      -webkit-text-stroke-color: rgb(255, 187, 0);
    }
    `}
`;

function Links({ page, about }) {
  return (
    <>
      {about ? (
        <StyledLink to={page ? "/" + page : "/"}>
          {page ? page : "About"}
        </StyledLink>
      ) : (
        <StyledLink to={page ? "/" + page : "/"} $isAboutLink>
          {page ? page : "About"}
        </StyledLink>
      )}
    </>
  );
}

export default Links;

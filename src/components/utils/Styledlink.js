import "./Stylelink.scss";

function StyledHTMLlinka(props) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noreferrer"
      className={props.name ? props.name : null}
    >
      {props.children}
    </a>
  );
}

export default StyledHTMLlinka;

import "./Header.scss";
import Navbar from "../Navbar/Navbar";

function Header() {
  const words = [
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
        <Navbar />
      </div>
    </>
  );
}

export default Header;

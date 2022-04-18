import Header from "./components/Header/Header";
import Router from "./components/Routes/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;

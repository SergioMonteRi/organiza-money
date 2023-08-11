import { BrowserRouter } from "react-router-dom";

import Home from "pages/home";

import "./App.css";
import "./styles/typography.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;

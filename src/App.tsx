import { BrowserRouter } from 'react-router-dom';

import Home from 'pages/home';

import NavigationBar from 'components/navigation-bar';

import 'assets/styles/custom.scss';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;

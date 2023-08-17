import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from 'pages/home';
import Login from 'pages/login';

import NavigationBar from 'components/navigation-bar';

import 'assets/styles/custom.scss';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

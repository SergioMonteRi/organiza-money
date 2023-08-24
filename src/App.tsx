import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from 'pages/home';
import Login from 'pages/login';
import Dashboard from 'pages/dashboard';

import NavigationBar from 'components/navigation-bar';

import { AuthContext, AuthContextData } from 'contex/AuthContex';

import 'assets/styles/custom.scss';
import './App.css';
import './styles/page.css';
import './styles/keyframes.css';
import './styles/link.css';
import './styles/button.css';
import './styles/dashboard.css';
import './styles/constants.css';

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

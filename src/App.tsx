import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// PAGES
import Home from 'pages/home';
import Login from 'pages/login';
import Dashboard from 'pages/dashboard';

// AUTH
import { AuthContext, AuthContextData } from 'contex/AuthContex';

// STYLES
import 'assets/styles/custom.scss';
import './App.css';

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
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

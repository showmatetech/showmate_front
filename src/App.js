import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { accessToken } from './services/spotify/spotify'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken)
  }, []);

  return (
    <div className="app">
      {!token ? (
        <Router>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<Home />}> </Route>
          </Routes>
        </Router>

      ) : (
        <Router>
          <Routes>
            <Route path="*" element={<Dashboard />}></Route>
          </Routes>
        </Router>
      )}

    </div>
  );
}

export default App;
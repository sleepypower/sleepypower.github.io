import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from "react-router-dom";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Navbar';
import Skills from './Components/Pages/Skills/Skills';
import Projects from './Components/Pages/Projects/Projects';
import ParticleBackground from './Components/ParticleBackground';
import ParticleBG from './Components/ParticleBG';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter >
    <ParticleBG />
    <Navbar />
    <Routes>
      {/* All routes go inside here */}
      <Route path="/" element={<Home />} />
      <Route path="skills" element={<Skills />} />
      <Route path="projects" element={<Projects />} />
      <Route path="app" element={<App />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>404</p>
          </main>
        }
      />

    </Routes>
  </HashRouter >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

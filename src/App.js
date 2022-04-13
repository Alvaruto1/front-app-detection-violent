import React from "react";
import "./App.css";
import { Navbar } from "./features/navbar/Navbar";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Home from "./features/pages/Home";
import Presentation from "./features/pages/Presentation";
import Detector from "./features/pages/Detector";
import DetectionsExample from "./features/pages/DetectionsExample";

function App() {
  return (
    <div className="App">
      
        <Router>
          <Navbar />
          <Routes>
            <Route path="/presentation" element={<Presentation/>}/>
            <Route path="/detector" element={<Detector/>}/>
            <Route path="/detections_example" element={<DetectionsExample/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
          
        </Router>
      </div>
  );
}

export default App;




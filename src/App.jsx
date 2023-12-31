import React from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WorkExperience from "./components/WorkExperience/WorkExperience";

const App = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <Hero></Hero>
                <WorkExperience></WorkExperience>
            </div>
        </>
    )
};

export default App

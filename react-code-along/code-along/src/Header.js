import React from "react";
import ReactDOM from "react-dom";
import logo192 from "./logo192.png"
import './App.css';


function Header(){
return(
    <>
  <header >
      
      <nav className="nav ; shadow">
      <img src={logo192} alt="React Image" width="60px"></img><h1 id="h1a">ReactFacts</h1>
        <div>
          <h4 id="h2a">React Course - Project 1 </h4>
        </div>


      </nav>
    
    </header>
    </>
)


}

export default Header;
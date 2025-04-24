import Bluebarry from "./images/Bluebarry.webp";
import Apple from "./images/Apple.png"
import orange from "./images/orange.webp"
import strawberries from "./images/strawberries.webp"
import { useState } from "react";
import "./Hover.css"


function Hover(){
    let [imghover ,setimghover]= useState("");
    const apple=()=>{
        setimghover(Apple);
    }
   
     
    return(<>
     <div className="container">
      <div className="fruit-list">
      <h1 onMouseEnter={()=>setimghover(Bluebarry) } >Blueberry</h1>
      <h1 onMouseEnter={apple}>Apple</h1>
      <h1 onMouseEnter={()=>setimghover(orange)}>orange</h1>
      <h1 onMouseEnter={()=>setimghover(strawberries)}>strawberries</h1>
      </div>
      <img src= {imghover} alt="" />
      </div>
    </>)
    
}

export default Hover;
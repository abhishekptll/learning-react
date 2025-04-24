import { useState } from "react";


function Event(){
     
   let [changeColor,setchange]= useState("yellow")
  
   function pink(){
    setchange("pink");
   }
  


    return(<>
        <div style={{backgroundColor: changeColor, height: "100vh"}}>
        <h1>this is Event page</h1>
      
        <button onClick={()=>setchange("blue")}>blue</button>
        <button onClick={()=>setchange("orange")}> orange</button>
        <button onClick={()=>setchange("green")}> green</button>
        <button onClick={pink}>pink</button>
        <img src="vite.svg" height="200px" alt="" />
        <img src="Wh.jpg"  alt="" />
        </div>
    </>)
}
export default Event;
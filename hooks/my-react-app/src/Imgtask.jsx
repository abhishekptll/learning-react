import { useState } from "react";
import myimg from "./images/2img.jpg";
import myimg2 from "./images/3ing.jpg"

function Imgtask(){
     let [changeimg,setimg] =useState(myimg);
     
     

    return(<>
       <img src= {changeimg} alt="" />
       <button onClick={()=>setimg(myimg2)}>change</button>
    
    </>)
}
export default Imgtask;
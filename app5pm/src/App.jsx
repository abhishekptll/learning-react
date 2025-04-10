import { useState } from "react";
import axios from "axios";

const App=()=>{
   const [input , setinput]= useState({});

   const handleinput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setinput(values=>({...values,[name]:value}))
    console.log(input);
   }

const sumbit=async()=>{

  let api = "http://localhost:3000/data";
  let res = await axios.post(api,input);
  alert("sucessfullll");

}

  return(
    <>
    <form onSubmit={sumbit}>
    enter name <input type="text" name="name" onChange={handleinput}/>
    <br /><br />
    enter rollno <input type="text" name='rollno' onChange={handleinput}/>
    <br /><br />
    enter city <input type="text" name="city" onChange={handleinput} />
    <br /><br />
    <button>sumbit</button>

    </form>

    </>
  )
}

export default App;
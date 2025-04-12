import { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      let api = "http://localhost:3000/data";
      const res = await axios.post(api, input);
      console.log(res);
      alert("Data successfully submitted...");
      setInput({}); 
    } catch (error) {
      console.error("Error submitting data", error);
    }
  };

  return (
    <>
      <h1>Insert Page</h1>

      Enter name: <input type="text" name="name" onChange={handleInput} /> <br /><br />
      Enter age: <input type="text" name="age" onChange={handleInput} /> <br /><br />
      Enter roll no: <input type="text" name="rollno" onChange={handleInput} /> <br /><br />
      <button onClick={handleSubmit}>Submit</button>
      
    </>
  );
};

export default Insert;

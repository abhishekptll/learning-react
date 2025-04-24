import { useState } from "react"


function State(){
    let [Number, setNumber] = useState(1);
    
    function Add(){
        setNumber(Number+1);
    }
    
    return(
        <>
        <h1>this is State page</h1>
        <h1>use state value is {Number}</h1>
        <button onClick={Add}>Increment</button>
        </>
    )
}

export default State;


function Event(){

    function fun(n){
        alert("working"+n);
        setBgColor(n);
      }

    function onMouseEnter(){
        alert("onmouseenter");
    } 
    function onDblClick(){
alert("onDblclick");
    }
      return(
        <>
        <h1>this is Event page </h1>
    
        <button onClick={(()=>fun("red"))}>click me</button>
        <button onMouseEnter={onMouseEnter}></button>
        <button onDblClick={onDblClick}> onDblClick </button>
        </>
      )
    }

export default Event;
import Pchild2 from "./Pchild2";
import Pchild1 from "./Pchild1";


function Parent(){

    return(
        <>
        <Pchild2 country ="india" state="MP" />
        <Pchild1 name="abhishek" age="22"/>
        </>
    )
}
export default Parent;
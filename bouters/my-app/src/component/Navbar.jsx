import { Link } from "react-router-dom"


function Navbar(){

    return(
    <>
    <h1>LOGO</h1>
    <ul>
        <li> <Link to="/"> Home</Link> </li>
        <li> <Link to ="/about"> About </Link></li>
        <li> <Link to ="/Icon"> Icon</Link></li>
    </ul>
    </>)
}

export default Navbar
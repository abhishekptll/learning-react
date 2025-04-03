// import {BrowsesrRouter,Routes,Route} from "react-router-dom"
// import Layout from "./Layout";
// import Home from "./pages/Home";
// import About from "./pages/about";
// import Contact from "./pages/Contact";
import img from"./imgs/1.jpeg";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const App=()=>{
  return(
    <>

    {/* <img src="{myimg}" width="300" height="500"/> */}
    {/* <BrowsesrRouter>
    <Routes>
      <Route path="Layout" element={<Layout/>} >
      <Route path="Home" element={<Home/>} />
      <Route path="About" element={<About/>} />
      <Route path="Contact" element={<Contact/>} />
      </Route>
      
    </Routes>
    </BrowsesrRouter> */}


<Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default App;

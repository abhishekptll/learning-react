import {Route, Routes} from "react-router-dom"
import Icon from "./component/Icon"
import Home from "./component/Home"
import About from "./component/about"
import Navbar from "./component/Navbar"

function App(){


  return(<>
    <Navbar />
  <Routes>
    <Route index element = { <Home/> } />
    <Route path= "/about" element={<About/>} />
    <Route path="/icon" element={<Icon/>}/>
  </Routes>

  </>)
}

export default App;
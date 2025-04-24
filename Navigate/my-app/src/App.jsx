import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./component/Home";
import Contact from "./component/Contact";
import Contactsur from './component/Contactsur';
import Structure from "./component/Structure";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Structure />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contactsur" element={<Contactsur />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

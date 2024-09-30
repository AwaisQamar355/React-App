import React  from "react";
// import Navbar from './Mycomponenets/Navbar'
import { Route , Routes} from "react-router-dom"
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Contact from './routes/Contact';
import Signup from './routes/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
      {/* <Navbar /> */}
      
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.scss";
import Detail from "./Pages/Detail";
import LogIn from "./Pages/LogIn";
function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route  path="/" element={< Layout/>}>
            
            <Route exact index element={<Home />}></Route>

            {/* <Route exact path="/about" element={<About />}></Route> */}
            <Route path="detail/:id" element={<Detail />} />
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/shop" element={<Shop />}></Route>
          </Route>

          <Route exact path="/login" element={<LogIn/>}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;

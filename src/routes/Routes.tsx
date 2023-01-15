import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import About from "../pages/about/About";
import Home from "../pages/home/Home";

export default function RoutesApp (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Home />} />
                {/* <Route path="/char" element={<About />} />
                <Route path="/squi" element={<About />} />
                <Route path="/bulba" element={<About />} />
                <Route path="/pikachu" element={<About />} /> */}
            </Routes>
        </BrowserRouter>
    );
}
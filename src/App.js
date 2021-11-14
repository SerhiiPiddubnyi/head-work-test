import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Random from "./components/random/Random";
import Favourite from "./components/favourite/Favourite";
import {BrowserRouter, Route, Routes,} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                < Header/>
                < Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route exact path="/" element={<Random/>}/>
                        <Route path="/random" element={<Random/>}/>
                        <Route path="/favourite" element={<Favourite/>}/>
                    </Routes>
                    {/*<Random/>*/}
                    {/*<Favourite/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

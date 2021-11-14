import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Random from "./components/random/Random";
import Favourites from "./components/favourite/Favourites";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {useEffect, useState} from "react";

function App() {
    const [meals, addMeal] = useState(JSON.parse(window.localStorage.getItem('meals')) || [])

    useEffect(() => {
        window.localStorage.removeItem('meals')
        const store = JSON.stringify(meals)
        window.localStorage.setItem('meals', store)
    }, [meals])

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                < Header/>
                < Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route exact path="/" element={<Random addMeal={addMeal} meals={meals}/>}/>
                        <Route path="/random" element={<Random addMeal={addMeal} meals={meals}/>}/>
                        <Route path="/favourite" element={<Favourites meals={meals}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

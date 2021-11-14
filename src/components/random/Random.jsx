import React, {useEffect, useState} from "react";
import Meal from "../meal/Meal";
import axios from "axios";

const Random = ({addMeal, meals}) => {
    const [meal, setMeal] = useState({})
    const baseURL = "https://www.themealdb.com/api/json/v1/1/random.php"
    useEffect(() => {
        axios.get(baseURL)
            .then((res)=>{
                setMeal(res.data.meals[0])
            })
    },[meals])

    const toSave = () =>{
        addMeal([...meals, meal])
    }
    const goToNext = () =>{
        addMeal([...meals])
    }

    console.log(meals)

    return (
        <div>
            <div>
                <Meal meal={meal}/>
            </div>
            <div>
                <button onClick={goToNext}>Next</button>
                <button onClick={toSave}>Save</button>
            </div>
        </div>
    );
}

export default Random;
import React from "react";
import Meal from "../meal/Meal";
import style from './Favouritesl.module.css'

const Favourites = ({meals}) => {
    return (
        <div>
            <div className={style.wrapper}>
                {meals.map(meal => <Meal meal={meal}/>)}
            </div>
        </div>
    );
}

export default Favourites;
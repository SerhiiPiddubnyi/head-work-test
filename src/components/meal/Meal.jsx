import React from "react";

const Meal = (props) =>{

    return(
        <div>
            <div>
                <img src={props.meal.strMealThumb}/>
            </div>
            <div>
                <span>Meal name</span><span>{props.meal.strMeal}</span>
            </div>
            <div>
                <span>Category</span><span>{props.meal.strCategory}</span>
            </div>
            <diw>
                <span>Area</span><span>{props.meal.strArea}</span>
            </diw>
            <div>
                <span>Instructions</span><span><p>{props.meal.strInstructions}.</p></span>
            </div>
            <div>
               <span>Ingredients</span>
            </div>
            <diw>
                <span>Youtube</span><div>https://www.youtube.com/watch?v=M1ok7mG9-Qc</div>
            </diw>
            <div>
                <span>Source</span><a href={props.meal.strSource}>{props.meal.strSource}</a>
            </div>
            <div>
                <span>Tags</span><span>{props.meal.strTags}</span>
            </div>
        </div>
    );
}

export  default Meal;
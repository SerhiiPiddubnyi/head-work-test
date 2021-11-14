import React from 'react';
import style from './Meal.module.css'
import Ingredient from './Ingredient';
import placeholder from '../../assets/DishPlaceholder.jpg'

const Meal = ({meal}) => {
    const ingredients =Object.keys(meal).filter((item)=>{
        return (item.indexOf('Ingredient') > -1 && meal[item])
    })


    return (
        <div className={style.card}>
            <div className={style.wrapper}>
                <div>
                    <img src={meal.strMealThumb || placeholder}/>
                </div>
                <div>
                    <div>
                        <span>Meal name: </span><span>{meal.strMeal}</span>
                    </div>
                    <div>
                        <span>Category: </span><span>{meal.strCategory}</span>
                    </div>
                    <div>
                        <span>Area: </span><span>{meal.strArea}</span>
                    </div>
                </div>
            </div>
            <div className={style.wrapper}>
                <span>Ingredients</span>
                {ingredients.map((ingredient) => <Ingredient ingredient={ingredient} meal={meal}/>)}
            </div>
            <div>
                <span>Instructions: <p>{meal.strInstructions}</p></span>
            </div>
            <diw>
                <span>Youtube:  </span>
                <a href={meal.strYoutube}>{meal.strYoutube}</a>
            </diw>
            <div>
                <span>Source: </span><a href={meal.strSource}>{meal.strSource}</a>
            </div>
            <div>
                <span>Tags: </span><span>{meal.strTags}</span>
            </div>
        </div>
    );
}

export default Meal;
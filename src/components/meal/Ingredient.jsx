
const Ingredient = ({ingredient, meal}) => {
    return(
        <div>
            <span>{meal[ingredient]}: </span>
            <span>{meal[`strMeasure${ingredient.substring(13)}`]}</span>
        </div>
    )
}

export default Ingredient
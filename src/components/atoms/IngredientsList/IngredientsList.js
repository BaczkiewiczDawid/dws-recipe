import recipes from 'data/data';

const IngredientsList = ({ selectedRecipe }) => {
    return ( 
        recipes[selectedRecipe].ingredients.map((ingredient) => (
            <li>{ingredient}</li>
        ))
     );
}
 
export default IngredientsList;
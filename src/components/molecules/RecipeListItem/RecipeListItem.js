import recipes from 'data/data';

const RecipeListItem = () => {
    return ( 
        <div>
            {recipes.map((recipe) => (
            <div>
                <h2>{recipe.name}</h2>
                <p>Level: {recipe.level}</p>
            </div>
        ))}
        </div>
     );
}
 
export default RecipeListItem;
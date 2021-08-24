import { StyledTitle } from './RecipeList.styles'
import recipes from 'data/data';
import RecipeListItem from 'components/molecules/RecipeListItem/RecipeListItem';

const RecipeList = ({ setSelectedRecipe }) => {
    return ( 
        <div>
            <StyledTitle>Recipes</StyledTitle>
            {recipes.map((recipeData) => (
                <RecipeListItem recipeData={recipeData} setSelectedRecipe={setSelectedRecipe} />
            ))}
        </div>
     );
}
 
export default RecipeList;
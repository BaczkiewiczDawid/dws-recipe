import { StyledTitle } from './RecipeList.styles'
import recipes from 'data/data';
import RecipeListItem from 'components/molecules/RecipeListItem/RecipeListItem';

const RecipeList = ({ setSelectedRecipe, setIsOpen }) => {
    return ( 
        <div>
            <StyledTitle>Recipes</StyledTitle>
            {recipes.map((recipeData) => (
                <RecipeListItem recipeData={recipeData} setSelectedRecipe={setSelectedRecipe} setIsOpen={setIsOpen} />
            ))}
        </div>
     );
}
 
export default RecipeList;
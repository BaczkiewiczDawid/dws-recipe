import { StyledTitle } from './RecipeList.styles'
import recipes from 'data/data';
import RecipeListItem from 'components/molecules/RecipeListItem/RecipeListItem';

const RecipeList = () => {
    return ( 
        <div>
            <StyledTitle>Recipes</StyledTitle>
            {recipes.map((recipeData) => (
                <RecipeListItem recipeData={recipeData} />
            ))}
        </div>
     );
}
 
export default RecipeList;
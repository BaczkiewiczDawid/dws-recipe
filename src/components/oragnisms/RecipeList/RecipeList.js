import RecipeListItem from 'components/molecules/RecipeListItem/RecipeListItem';
import { StyledTitle } from './RecipeList.styles'

const RecipeList = () => {
    return ( 
        <div>
            <StyledTitle>Recipes</StyledTitle>
            <RecipeListItem />
        </div>
     );
}
 
export default RecipeList;
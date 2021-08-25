import recipes from 'data/data';
import { StyledPreparation, StyledTitle, StyledHeader } from './RecipeDetails.styled';
import IngredientsList from 'components/atoms/IngredientsList/IngredientsList';

const RecipeDetails = ({ selectedRecipe }) => {
    return ( 
        <div>
            <StyledHeader>Details</StyledHeader>
            <div>
                <StyledTitle>Ingredients</StyledTitle>
                <ul>
                    <IngredientsList selectedRecipe={selectedRecipe} />
                </ul>
            </div>
            <StyledTitle>Preparation</StyledTitle>
            <StyledPreparation>{recipes[selectedRecipe].preparation}</StyledPreparation>
        </div>
     );
}
 
export default RecipeDetails;
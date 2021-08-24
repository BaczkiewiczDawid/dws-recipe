import recipes from 'data/data';
import { StyledPreparation, StyledTitle, StyledHeader } from './RecipeDetails.styled';

const RecipeDetails = ({selectedRecipe}) => {
    return ( 
        <div>
            <StyledHeader>Details</StyledHeader>
            <div>
                <StyledTitle>Ingredients</StyledTitle>
                <ul>
                    {recipes[selectedRecipe].ingredients.map((ingredient) => (
                        <li>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <StyledTitle>Preparation</StyledTitle>
            <StyledPreparation>{recipes[selectedRecipe].preparation}</StyledPreparation>
        </div>
     );
}
 
export default RecipeDetails;
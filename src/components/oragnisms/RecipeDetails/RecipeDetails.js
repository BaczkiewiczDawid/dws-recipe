import recipes from 'data/data';
import { StyledPreparation, StyledTitle, StyledHeader, StyledWrapper, StyledList, StyledBox, StyledButton } from './RecipeDetails.styled';
import IngredientsList from 'components/atoms/IngredientsList/IngredientsList';

const RecipeDetails = ({ selectedRecipe, isMobile, isOpen, setIsOpen }) => {
    const closeDetails = () => {
        setIsOpen(false);
    }

    return ( 
        <StyledWrapper isOpen={isOpen}>
        <StyledBox>
            <StyledHeader>Details</StyledHeader>
            {isMobile && <StyledButton onClick={closeDetails}>X</StyledButton>}
        </StyledBox>
        <div>
            <StyledTitle>Ingredients</StyledTitle>
            <StyledList>
                <IngredientsList selectedRecipe={selectedRecipe} />
            </StyledList>
        </div>
        <StyledTitle>Preparation</StyledTitle>
        <StyledPreparation>{recipes[selectedRecipe].preparation}</StyledPreparation>
    </StyledWrapper>
     );
}
 
export default RecipeDetails;
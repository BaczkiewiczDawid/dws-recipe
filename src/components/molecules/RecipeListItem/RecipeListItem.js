import React from 'react';
import { StyledWrapper, StyledTitle, StyledParagraph } from './RecipeListItem.styles';

const RecipeListItem = ({ recipeData: { name, level, id }, setSelectedRecipe, setIsOpen }) => {
    const showDetails = (id) => {
        setSelectedRecipe(id - 1);
        setIsOpen(true)
      }

    return ( 
        <>
            <StyledWrapper onClick={() => showDetails(id)}>
                <StyledTitle>{name}</StyledTitle>
                <StyledParagraph>Level: {level}</StyledParagraph>
            </StyledWrapper>
        </>
     );
}
 
export default RecipeListItem;
import React from 'react';
import { StyledWrapper, StyledTitle, StyledParagraph } from './RecipeListItem.styles';

const RecipeListItem = ({ recipeData: { name, level, id }, setSelectedRecipe }) => {
    const showDetails = (id) => {
        setSelectedRecipe(id - 1);
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
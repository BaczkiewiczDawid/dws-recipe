import React from 'react';
import recipes from 'data/data';
import { StyledWrapper, StyledTitle, StyledParagraph } from './RecipeListItem.styles';

const RecipeListItem = ({ recipeData: { name, level, id } }) => {
    const showDetails = (id) => {
        const selectedRecipe = recipes[id - 1];
        console.log(selectedRecipe)
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
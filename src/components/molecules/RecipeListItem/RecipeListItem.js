import React, { useContext } from 'react';
import recipes from 'data/data';
import { StyledWrapper, StyledTitle, StyledParagraph } from './RecipeListItem.styles';
import { RecipeContext } from 'providers/RecipeProvider';

const RecipeListItem = () => {
    const { showDetails } = useContext(RecipeContext)

    return ( 
        <>
            {recipes.map((recipe) => (
                <StyledWrapper id={recipe.id} onClick={() => showDetails(recipe.id)}>
                    <StyledTitle>{recipe.name}</StyledTitle>
                    <StyledParagraph>Level: {recipe.level}</StyledParagraph>
                </StyledWrapper>


        ))}
        </>
     );
}
 
export default RecipeListItem;
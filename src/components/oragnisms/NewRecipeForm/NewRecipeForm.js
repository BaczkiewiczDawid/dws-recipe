import { StyledForm, StyledTitle, StyledButton } from './NewRecipeFrom.styled';

const NewRecipeForm = () => {
    return ( 
        <>
            <StyledTitle>Add new recipe</StyledTitle>
            <StyledForm action="">
                <label>Ingredients</label>
                <input type="text" />
                <label>Preparation</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <StyledButton type="submit">Add new recipe</StyledButton>
            </StyledForm>
        </>
     );
}
 
export default NewRecipeForm;
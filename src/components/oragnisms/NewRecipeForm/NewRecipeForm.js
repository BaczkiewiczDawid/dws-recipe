import { StyledForm, StyledTitle, StyledButton, StyledSelect } from './NewRecipeFrom.styled';
import recipes from 'data/data';

const NewRecipeForm = () => {


    return ( 
        <>
            <StyledTitle>Add new recipe</StyledTitle>
            <StyledForm >
                <label>Title</label>
                <input type="text" />
                <label>Ingredients</label>
                <input type="text" />
                <label>Preparation</label>
                <textarea name="preparation" id="" cols="30" rows="10"></textarea>
                <StyledSelect name="Level">
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </StyledSelect>
                <StyledButton type="submit">Add new recipe</StyledButton>
            </StyledForm>
        </>
     );
}
 
export default NewRecipeForm;
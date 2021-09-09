import { useState } from 'react';
import { StyledForm, StyledTitle, StyledButton, StyledSelect } from './NewRecipeFrom.styled';
import recipesList from 'data/data';

const NewRecipeForm = () => {
    const [formValues, setFormValues] = useState({
        title: '',
        ingredients: '',
        preparation: '',
    })
    const [recipes, setRecipes] = useState(recipesList);

    const handleInputChange = (e) => {
        console.log(formValues)
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }

    const addNewRecipe = (e) => {
        e.preventDefault();
        const newRecipe = {
            title: formValues.title,
            ingredients: formValues.ingredients,
            preparation: formValues.preparation,
            level: 'medium',
        }
        
        setRecipes({...recipes, newRecipe});
        console.log(recipes);

    }

    return ( 
        <>
            <StyledTitle>Add new recipe</StyledTitle>
            <StyledForm onSubmit={addNewRecipe} >
                <label>Title</label>
                <input type="text" name="title" onChange={handleInputChange} value={formValues.name} />
                <label>Ingredients</label>
                <input type="text" name="ingredients" onChange={handleInputChange} value={formValues.ingredients} />
                <label>Preparation</label>
                <textarea name="preparation" id="" cols="30" rows="10" onChange={handleInputChange} value={formValues.preparation }></textarea>
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
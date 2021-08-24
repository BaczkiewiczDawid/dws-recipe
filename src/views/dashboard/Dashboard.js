import { useState } from 'react';
import RecipeList from 'components/oragnisms/RecipeList/RecipeList';
import RecipeDetails from 'components/oragnisms/RecipeDetails/RecipeDetails';
import { StyledWrapper } from './Dashboard.styled';

const Dashboard = () => {
    const [selectedRecipe, setSelectedRecipe] = useState(0);

    return ( 
        <>
            <StyledWrapper >
                <RecipeList setSelectedRecipe={setSelectedRecipe} />
                <RecipeDetails selectedRecipe={selectedRecipe} />
            </StyledWrapper>
        </>
     );
}
 
export default Dashboard;
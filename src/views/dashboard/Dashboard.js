import { useState } from 'react';
import RecipeList from 'components/oragnisms/RecipeList/RecipeList';
import RecipeDetails from 'components/oragnisms/RecipeDetails/RecipeDetails';
import { StyledWrapper } from './Dashboard.styled';
import Navbar from 'components/oragnisms/Navbar/Navbar';

const Dashboard = () => {
    const [selectedRecipe, setSelectedRecipe] = useState(0);

    return ( 
        <>
            <Navbar />
            <StyledWrapper >
                <RecipeList setSelectedRecipe={setSelectedRecipe} />
                <RecipeDetails selectedRecipe={selectedRecipe} />
            </StyledWrapper>
        </>
     );
}
 
export default Dashboard;
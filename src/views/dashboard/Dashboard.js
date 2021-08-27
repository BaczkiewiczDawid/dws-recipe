import { useState } from 'react';
import RecipeList from 'components/oragnisms/RecipeList/RecipeList';
import RecipeDetails from 'components/oragnisms/RecipeDetails/RecipeDetails';
import { StyledWrapper } from './Dashboard.styled';
import Navbar from 'components/oragnisms/Navbar/Navbar';
import { useMediaQuery } from 'react-responsive';


const Dashboard = () => {
    const [selectedRecipe, setSelectedRecipe] = useState(0);
    const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <>
            <Navbar />
            <StyledWrapper >
                <RecipeList setSelectedRecipe={setSelectedRecipe} isMobile={isMobile} setIsOpen={setIsOpen} />
                <RecipeDetails selectedRecipe={selectedRecipe} isMobile={isMobile} isOpen={isOpen} />
            </StyledWrapper>
        </>
     );
}
 
export default Dashboard;
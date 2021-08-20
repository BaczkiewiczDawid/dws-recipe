import React from 'react';
import recipes from 'data/data';

export const RecipeContext = React.createContext({
    recipes: [],
    selectedRecipe: () => {},
    showDetails: () => {},
})

const RecipeProvider = ({ children }) => {
    const showDetails = (id) => {
        const selectedRecipe = recipes[id - 1];
        console.log(selectedRecipe)
    }

    return ( 
        <RecipeContext.Provider 
            value={{
                recipes,
                showDetails,
            }}
        >
            {children}
        </RecipeContext.Provider>
     );
}
 
export default RecipeProvider;
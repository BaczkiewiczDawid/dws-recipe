import { StyledNavigation, StyledLogo, StyledList, StyledBox, StyledLink } from './Navbar.styled'

const Navbar = () => {
    return ( 
        <StyledNavigation>
            <StyledBox>
                <StyledLogo>DWS Recipes</StyledLogo>
            </StyledBox>
            <StyledList>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/new-recipe">Add recipe</StyledLink>
            </StyledList>
        </StyledNavigation>
     );
}
 
export default Navbar;
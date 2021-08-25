import { Link } from 'react-router-dom';
import { StyledNavigation, StyledLogo, StyledList } from './Navbar.styled'

const Navbar = () => {
    return ( 
        <StyledNavigation>
            <StyledLogo>DWS Recipes</StyledLogo>
            <StyledList>
                <Link to="/" style={{textDecoration: 'none', color: '#2a2a2a'}}>Home</Link>
                <Link to="/add-recipe" style={{textDecoration: 'none', color: '#2a2a2a'}}>Add recipe</Link>
            </StyledList>
        </StyledNavigation>
     );
}
 
export default Navbar;
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavigation = styled.nav`
    width: 120px;
    height: 100%;
    position: fixed;
    top: 0;
    background-color: transparent;
    border-right:  1px solid rgba(42, 42, 42, .3);
    text-align: right;
`;

export const StyledLogo = styled.h1`
    color: #fafafa;
    margin-right: 10px;
`;

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-right: 10px;
`;

export const StyledLink = styled(Link)`
    margin-top: 2rem;
    font-size: 16px;
    text-decoration: none;
    color: #2a2a2a;
    white-space: nowrap;
`;

export const StyledBox = styled.div`
    background-color: #2a2a2a;
    width: 120px;
    height: auto;
    top: 0;
    padding: 1px 0px;
`;
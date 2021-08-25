import styled from 'styled-components';

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
    background-color: #2a2a2a;
    width: 120px;
    height: 70px;
    margin-top: 0;
    padding: 10px 0px;
`;

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
`;

export const StyledLink = styled.a`
    margin-top: 2rem;
    font-size: 20px;
    text-decoration: none;
    color: #2a2a2a;
`;
import styled from 'styled-components';

export const StyledPreparation = styled.p`
    @media screen and (max-width: 767px) {
        margin-left: 2rem;
    }
    color: #2a2a2a;
    width: 250px;
`;

export const StyledTitle = styled.h2`
    @media screen and (max-width: 767px) {
        margin-left: 2rem;
    }
    color: #2a2a2a;
    margin-top: 2rem;
`;

export const StyledHeader = styled.h1`
    @media screen and (max-width: 767px) {
        margin-left: 2rem;
    }
    color: #2a2a2a;
    font-size: 38px;
    margin-top: 2rem;
`;

export const StyledWrapper = styled.div`
    display: ${props => props.isOpen ? 'block' : 'none'};

    @media screen and (max-width: 767px) {
        position: absolute;
        background-color: #fafafa;
        width: 100vw;
        height: auto;
    }
`;

export const StyledList = styled.ul`
    @media screen and (max-width: 767px) {
        margin-left: 2rem;
    }
`;

export const StyledBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const StyledButton = styled.button`
    width: 30px;
    height: 30px;
    background-color: #2a2a2a;
    color: #fafafa;
    border: none;
    border-radius: 25px;
    margin-top: 3%;
    margin-right: 10vw;
    cursor: pointer;
`;
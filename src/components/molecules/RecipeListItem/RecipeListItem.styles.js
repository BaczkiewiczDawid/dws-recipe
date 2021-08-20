import styled from 'styled-components';

export const StyledWrapper = styled.div`
    border-bottom: 1px solid rgba(42, 42, 42, .2);
    margin-left: 20vw;
    width: 400px;
    height: auto;
    cursor: pointer;

    &:nth-child(2) {
        margin-top: 5rem;
    }
`;

export const StyledTitle = styled.h2`
    font-size: 22px;
    color: #2a2a2a;
`;

export const StyledParagraph = styled.p`
    font-size: 14px;
    color: #2a2a2a;
`;
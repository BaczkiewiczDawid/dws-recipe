import styled from 'styled-components';

export const StyledWrapper = styled.div`
    border-bottom: 1px solid rgba(42, 42, 42, .2);
    width: 200px;
    height: auto;
    cursor: pointer;
    margin-left: 2rem;
    white-space: nowrap;

    @media screen and (min-width: 768px) {
        border-bottom: 1px solid rgba(42, 42, 42, .2);
        width: 400px;

        &:nth-child(2) {
            margin-top: 5rem;
        }
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
import styled, { css } from "styled-components";

export const JumbotronWrapper = styled.div`
    padding: 10px 50px;
    @media (max-width: 800px) {
        padding: 150px 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
export const JumbotronHeader = styled.h1`
    margin: 10px 0;
    font-size: 60px;
    font-weight: bold;
    @media (max-width: 800px) {
        font-size: 50px;
    }
`;
export const JumbotronBody = styled.h5`
    margin: 20px 0;
    font-size: 20px;
    font-weight: normal;
`;
export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;
export const Button = styled.button`
    margin: 0 20px;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    color: ${({ theme }) => theme.colors.accentColor};
    font-weight: bold;
    font-size: 20px;
    box-shadow: ${({ theme }) => theme.shadow.default};
    ${({ secondary }) =>
        secondary &&
        css`
            border: 4px solid ${({ theme }) => theme.colors.accentColor};
            background-color: transparent;
        `}
    @media (max-width: 800px) {
        margin: 20px 0;
    }
`;

import styled, { css } from "styled-components";

export const JumbotronWrapper = styled.div`
    padding: 10px 50px;
`;
export const JumbotronHeader = styled.h1`
    margin: 10px 0;
    font-size: 60px;
    font-weight: bold;
`;
export const JumbotronBody = styled.h5`
    margin: 20px 0;
    font-size: 20px;
    font-weight: normal;
`;
export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
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
    ${({ secondary }) =>
        secondary &&
        css`
            border: 4px solid ${({ theme }) => theme.colors.accentColor};
            background-color: transparent;
        `}
`;

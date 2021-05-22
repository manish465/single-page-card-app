import styled, { css } from "styled-components";
import { FiMenu } from "react-icons/fi";
import { VscClose } from "react-icons/vsc";
import { motion } from "framer-motion";

export const AppbarWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;
    z-index: 1000;
`;
export const AppbarLogo = styled(motion.div)`
    cursor: pointer;
`;
export const AppbarLinks = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 800px) {
        display: none;
    }
`;
export const AppbarLink = styled(motion.div)`
    margin: 5px 20px;
    font-size: 1.1rem;
    cursor: pointer;
`;
export const AppbarButtons = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 800px) {
        display: none;
    }
`;
export const AppbarButton = styled(motion.button)`
    cursor: pointer;
    margin: 0 20px;
    border: 3px solid ${({ theme }) => theme.colors.accentColor};
    padding: 5px 25px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.accentColor};
    font-weight: bold;
    box-shadow: ${({ theme }) => theme.shadow.default};
    ${({ primary }) =>
        primary &&
        css`
            background-color: ${({ theme }) => theme.colors.secondaryColor};
            border: none;
        `}
`;
export const AppbarMenuOpenIcon = styled(FiMenu)`
    display: none;
    @media (max-width: 800px) {
        display: block;
    }
`;
export const AppbarMenuCloseIcon = styled(VscClose)`
    display: none;
    @media (max-width: 800px) {
        display: block;
    }
`;

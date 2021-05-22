import styled from "styled-components";
import { motion } from "framer-motion";

export const CardWrapper = styled(motion.div)`
    width: 275px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    margin: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.shadow.default};
    cursor: pointer;
    padding: 10px;
`;

export const Icon = styled(motion.div)``;

export const Header = styled(motion.h1)`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.accentColor};
`;

export const Body = styled(motion.h1)`
    font-size: 20px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.accentColor};
`;

export const Button = styled(motion.button)`
    margin: 0 20px;
    border: 3px solid ${({ theme }) => theme.colors.accentColor};
    padding: 5px 25px;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    color: ${({ theme }) => theme.colors.accentColor};
    font-weight: bold;
    box-shadow: ${({ theme }) => theme.shadow.default};
`;

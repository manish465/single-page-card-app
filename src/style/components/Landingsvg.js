import { motion } from "framer-motion";
import styled from "styled-components";

export const MainSvgWrapper = styled.div`
    display: flex;
    margin-top: 60px;
    @media (max-width: 800px) {
        display: none;
    }
`;
export const MainSvg = styled(motion.div)`
    margin: 10px;
`;
export const SideSvgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const SideSvg = styled(motion.div)``;

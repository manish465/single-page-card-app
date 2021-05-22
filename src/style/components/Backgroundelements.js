import { motion } from "framer-motion";
import styled from "styled-components";

export const BackgroundelementsWrapper = styled.div`
    position: absolute;
    width: 100%;
    z-index: 0;
    @media (max-width: 800px) {
        display: none;
    }
`;
export const WavePattern = styled(motion.div)`
    position: absolute;
    top: 0;
    right: 0;
`;

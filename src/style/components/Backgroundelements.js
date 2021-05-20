import styled from "styled-components";

import { ReactComponent as Wave } from "../../assets/svg/wave-pattern.svg";

export const BackgroundelementsWrapper = styled.div`
    position: absolute;
    width: 100%;
    z-index: 0;
    @media (max-width: 800px) {
        display: none;
    }
`;
export const WavePattern = styled(Wave)`
    position: absolute;
    top: 0;
    right: 0;
`;

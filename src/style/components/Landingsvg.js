import styled from "styled-components";

import { ReactComponent as Main } from "../../assets/svg/Main.svg";
import { ReactComponent as Side1 } from "../../assets/svg/side-1.svg";
import { ReactComponent as Side2 } from "../../assets/svg/side-2.svg";
import { ReactComponent as Side3 } from "../../assets/svg/side-3.svg";
import { ReactComponent as Side4 } from "../../assets/svg/side-4.svg";

export const MainSvgWrapper = styled.div`
    display: flex;
    margin-top: 60px;
    @media (max-width: 800px) {
        display: none;
    }
`;
export const MainSvg = styled(Main)`
    margin: 10px;
`;
export const SideSvgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const SideSvg1 = styled(Side1)``;
export const SideSvg2 = styled(Side2)``;
export const SideSvg3 = styled(Side3)``;
export const SideSvg4 = styled(Side4)``;

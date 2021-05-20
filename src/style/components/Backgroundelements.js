import styled from "styled-components";

import { ReactComponent as Main } from "../../assets/svg/Main.svg";
import { ReactComponent as Side1 } from "../../assets/svg/side-1.svg";
import { ReactComponent as Side2 } from "../../assets/svg/side-2.svg";
import { ReactComponent as Side3 } from "../../assets/svg/side-3.svg";
import { ReactComponent as Side4 } from "../../assets/svg/side-4.svg";
import { ReactComponent as Wave } from "../../assets/svg/wave-pattern.svg";

export const BackgroundelementsWrapper = styled.div`
    position: absolute;
    width: 100%;
`;
export const MainSvgWrapper = styled.div`
    display: flex;
    position: relative;
    top: 0;
    margin-top: 60px;
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

export const WavePattern = styled(Wave)`
    position: absolute;
    top: 0;
    right: 0;
`;

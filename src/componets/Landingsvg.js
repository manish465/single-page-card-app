import { useTransform, useViewportScroll } from "framer-motion";

import {
    MainSvg,
    MainSvgWrapper,
    SideSvg,
    SideSvgWrapper,
} from "../style/components/Landingsvg";

import { ReactComponent as Main } from "../assets/svg/Main.svg";
import { ReactComponent as Side1 } from "../assets/svg/side-1.svg";
import { ReactComponent as Side2 } from "../assets/svg/side-2.svg";
import { ReactComponent as Side3 } from "../assets/svg/side-3.svg";
import { ReactComponent as Side4 } from "../assets/svg/side-4.svg";

const Landingsvg = () => {
    const { scrollY } = useViewportScroll();

    const y = useTransform(scrollY, [0, 500], [0, -100]);
    const x1 = useTransform(scrollY, [0, 300], [0, 200]);
    const x2 = useTransform(scrollY, [0, 300], [0, 150]);
    const x3 = useTransform(scrollY, [0, 300], [0, 100]);
    const x4 = useTransform(scrollY, [0, 500], [0, 50]);
    const op = useTransform(scrollY, [0, 300], [1, 0]);
    return (
        <MainSvgWrapper>
            <MainSvg style={{ y }}>
                <Main />
            </MainSvg>
            <SideSvgWrapper>
                <SideSvg style={{ x: x1, opacity: op }}>
                    <Side1 />
                </SideSvg>
                <SideSvg style={{ x: x2, opacity: op }}>
                    <Side2 />
                </SideSvg>
                <SideSvg style={{ x: x3, opacity: op }}>
                    <Side3 />
                </SideSvg>
                <SideSvg style={{ x: x4, opacity: op }}>
                    <Side4 />
                </SideSvg>
            </SideSvgWrapper>
        </MainSvgWrapper>
    );
};

export default Landingsvg;

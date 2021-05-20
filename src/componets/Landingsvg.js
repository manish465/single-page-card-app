import {
    MainSvg,
    MainSvgWrapper,
    SideSvg1,
    SideSvg2,
    SideSvg3,
    SideSvg4,
    SideSvgWrapper,
} from "../style/components/Landingsvg";

const Landingsvg = () => {
    return (
        <MainSvgWrapper>
            <MainSvg />
            <SideSvgWrapper>
                <SideSvg1 />
                <SideSvg2 />
                <SideSvg3 />
                <SideSvg4 />
            </SideSvgWrapper>
        </MainSvgWrapper>
    );
};

export default Landingsvg;

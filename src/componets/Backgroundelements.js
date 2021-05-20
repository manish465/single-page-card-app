import {
    BackgroundelementsWrapper,
    MainSvg,
    MainSvgWrapper,
    SideSvg1,
    SideSvg2,
    SideSvg3,
    SideSvg4,
    SideSvgWrapper,
    WavePattern,
} from "../style/components/Backgroundelements";

const Backgroundelements = () => {
    return (
        <BackgroundelementsWrapper>
            <WavePattern />
            <MainSvgWrapper>
                <MainSvg />
                <SideSvgWrapper>
                    <SideSvg1 />
                    <SideSvg2 />
                    <SideSvg3 />
                    <SideSvg4 />
                </SideSvgWrapper>
            </MainSvgWrapper>
        </BackgroundelementsWrapper>
    );
};

export default Backgroundelements;

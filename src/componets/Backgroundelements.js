import { useViewportScroll, useTransform } from "framer-motion";

import {
    BackgroundelementsWrapper,
    WavePattern,
} from "../style/components/Backgroundelements";
import { ReactComponent as Wave } from "../assets/svg/wave-pattern.svg";

const Backgroundelements = () => {
    const { scrollY } = useViewportScroll();
    const value = useTransform(scrollY, [0, 250], [1, 0], {
        clamp: false,
    });
    return (
        <BackgroundelementsWrapper>
            <WavePattern style={{ opacity: value }}>
                <Wave />
            </WavePattern>
        </BackgroundelementsWrapper>
    );
};

export default Backgroundelements;

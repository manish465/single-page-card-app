import { GiForestCamp } from "react-icons/gi";

import {
    Body,
    Button,
    CardWrapper,
    Header,
    Icon,
} from "../style/components/FeatureCard";

const iconVariants = {
    rest: {
        scale: 2,
        y: 100,
    },
    hover: {
        scale: 1,
        y: 0,
    },
};
const headerVariants = {
    rest: {
        opacity: 0,
        rotateX: 10,
        y: -100,
    },
    hover: {
        opacity: 1,
        rotateX: 0,
        y: 0,
    },
};
const bodyVariants = {
    rest: {
        scale: 0,
        opacity: 0,
    },
    hover: {
        scale: 1,
        opacity: 1,
    },
};

const FeatureCard = () => {
    return (
        <CardWrapper initial='rest' whileHover='hover'>
            <Icon variants={iconVariants}>
                <GiForestCamp size={40} />
            </Icon>
            <Header variants={headerVariants}>Better Communication</Header>
            <Body variants={bodyVariants}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                tempore alias totam temporibus in possimus aliquam, nemo
            </Body>
            <Button
                whileHover={{
                    scale: 1.5,
                }}
                whileTap={{ opacity: 0 }}>
                Try It
            </Button>
        </CardWrapper>
    );
};

export default FeatureCard;

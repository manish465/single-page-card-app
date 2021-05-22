import {
    FeaturesCards,
    FeaturesHeader,
    FeaturesWrapper,
} from "../style/components/Features";
import FeatureCard from "./FeatureCard";

const Features = () => {
    return (
        <FeaturesWrapper>
            <FeaturesHeader>With Great Feature</FeaturesHeader>
            <FeaturesCards>
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
            </FeaturesCards>
        </FeaturesWrapper>
    );
};

export default Features;

import Jumbotron from "./Jumbotron";
import Landingsvg from "./Landingsvg";

import { WelcomeWrapper } from "../style/components/Welcome";

const Welcome = () => {
    return (
        <WelcomeWrapper>
            <Landingsvg />
            <Jumbotron />
        </WelcomeWrapper>
    );
};

export default Welcome;

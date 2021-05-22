import {
    Button,
    ButtonGroup,
    JumbotronBody,
    JumbotronHeader,
    JumbotronWrapper,
} from "../style/components/Jumbotron";

const Jumbotron = () => {
    return (
        <JumbotronWrapper>
            <JumbotronHeader>Work Faster</JumbotronHeader>
            <JumbotronBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                dicta, reiciendis error quam quas inventore possimus deserunt
                itaque porro. Reiciendis totam dolor officia, magnam ea corporis
                et quibusdam sunt nam?
            </JumbotronBody>
            <ButtonGroup>
                <Button
                    whileHover={{
                        scale: 1.5,
                    }}
                    whileTap={{ opacity: 0 }}>
                    GET STARTED
                </Button>
                <Button
                    whileHover={{
                        scale: 1.5,
                    }}
                    whileTap={{ opacity: 0 }}
                    secondary>
                    LEARN HOW
                </Button>
            </ButtonGroup>
        </JumbotronWrapper>
    );
};

export default Jumbotron;

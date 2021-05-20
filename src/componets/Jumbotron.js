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
                <Button>GET STARTED</Button>
                <Button secondary>LEARN HOW</Button>
            </ButtonGroup>
        </JumbotronWrapper>
    );
};

export default Jumbotron;

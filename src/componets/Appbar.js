import { useState } from "react";

import {
    AppbarButton,
    AppbarButtons,
    AppbarLink,
    AppbarLinks,
    AppbarLogo,
    AppbarMenuCloseIcon,
    AppbarMenuOpenIcon,
    AppbarWrapper,
} from "../style/components/Appbar";

const Appbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <AppbarWrapper>
            <AppbarLogo />
            <AppbarLinks>
                <AppbarLink>Work</AppbarLink>
                <AppbarLink>Product</AppbarLink>
                <AppbarLink>Pricing</AppbarLink>
                <AppbarLink>About us</AppbarLink>
                <AppbarLink>Contact us</AppbarLink>
            </AppbarLinks>
            <AppbarButtons>
                <AppbarButton>Sign up</AppbarButton>
                <AppbarButton primary>Sign in</AppbarButton>
            </AppbarButtons>
            {openMenu ? (
                <AppbarMenuCloseIcon onClick={() => setOpenMenu(false)} />
            ) : (
                <AppbarMenuOpenIcon onClick={() => setOpenMenu(true)} />
            )}
        </AppbarWrapper>
    );
};

export default Appbar;

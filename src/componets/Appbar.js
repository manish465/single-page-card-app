import { useState } from "react";
import { useCycle } from "framer-motion";

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
import { ReactComponent as Logo } from "../assets/svg/logo.svg";

const Appbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [rotate, cycleRotate] = useCycle(0, 100, 30);
    return (
        <AppbarWrapper>
            <AppbarLogo
                animate={{ rotateZ: rotate }}
                whileHover={() => cycleRotate()}>
                <Logo />
            </AppbarLogo>
            <AppbarLinks>
                <AppbarLink
                    whileHover={{
                        textDecoration: "underline",
                        y: -10,
                        scale: 1.5,
                    }}>
                    Work
                </AppbarLink>
                <AppbarLink
                    whileHover={{
                        textDecoration: "underline",
                        y: -10,
                        scale: 1.5,
                    }}>
                    Product
                </AppbarLink>
                <AppbarLink
                    whileHover={{
                        textDecoration: "underline",
                        y: -10,
                        scale: 1.5,
                    }}>
                    Pricing
                </AppbarLink>
                <AppbarLink
                    whileHover={{
                        textDecoration: "underline",
                        y: -10,
                        scale: 1.5,
                    }}>
                    About us
                </AppbarLink>
                <AppbarLink
                    whileHover={{
                        textDecoration: "underline",
                        y: -10,
                        scale: 1.5,
                    }}>
                    Contact us
                </AppbarLink>
            </AppbarLinks>
            <AppbarButtons>
                <AppbarButton
                    whileHover={{
                        scale: 1.5,
                    }}
                    whileTap={{ opacity: 0 }}>
                    Sign up
                </AppbarButton>
                <AppbarButton
                    whileHover={{
                        scale: 1.5,
                    }}
                    whileTap={{ opacity: 0 }}
                    primary>
                    Sign in
                </AppbarButton>
            </AppbarButtons>
            {openMenu ? (
                <AppbarMenuCloseIcon
                    size={30}
                    onClick={() => setOpenMenu(false)}
                />
            ) : (
                <AppbarMenuOpenIcon
                    size={30}
                    onClick={() => setOpenMenu(true)}
                />
            )}
        </AppbarWrapper>
    );
};

export default Appbar;

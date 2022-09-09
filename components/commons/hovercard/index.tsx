import React, { ReactElement, ReactNode } from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import {
    Flex,
    StyledContent,
    Text,
    StyledArrow,
    HoverCardRoot,
    HoverCardTrigger,
    ImageTrigger,
    Img
} from "./styled";
import { type } from "os";

const HoverCardContent = ({ children, ...props }) => {
    return (
        <HoverCardPrimitive.Portal>
            <StyledContent {...props}>
                {children}
                <StyledArrow />
            </StyledContent>
        </HoverCardPrimitive.Portal>
    );
};

type PropTypes = {
    children: ReactNode;
};

const HoverCard = ({ children }: PropTypes) => {
    return (
        <>
            <HoverCardRoot>
                <HoverCardTrigger asChild>{children}</HoverCardTrigger>

                <HoverCardContent>
                    <Flex>
                        <Text>@Deived</Text>
                        <Text>deived.william@live</Text>
                    </Flex>
                </HoverCardContent>
            </HoverCardRoot>
        </>
    );
};

export default HoverCard;

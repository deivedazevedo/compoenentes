import React from "react";
import styled from "styled-components";
import { mauve } from "@radix-ui/colors";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";


const slideUpAndFade = 



export const StyledContent = styled(HoverCardPrimitive.Content)`
    border-radius: 6px;
    padding: 20px;
    width: 300px;
    background-color: white;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
        hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    @media (prefers-reduced-motion) {
        animation-duration: "400ms";
        animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        will-change: transform opacity;
    }
`;

export const StyledArrow = styled(HoverCardPrimitive.Arrow)`
    fill: white;
`;

export const Flex = styled.div`
    display: flex;
`;

export const Text = styled.div`
    margin: 0px;
    color: black;
    font-size: 15px;
    line-height: normal;
    font-family: ${({ theme }) => theme.fontFamily.inter};
`;

export const ImageTrigger = styled.a`
    all: unset;
    cursor: pointer;
    border-radius: 100%;
    display: inline-block;
    &:focus {
        box-shadow: 0px 0px 2px white;
    }
`;
export const Img = styled.img`
    display: block;
    border-radius: 100%;
    width: 45px;
    height: 45px;
`;

export const HoverCardRoot = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;

import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import styled from "styled-components";

const StyledAvatar = styled(AvatarPrimitive.Root)<{
    borderColor: string;
    backgroundColor: string;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 30px;
    height: 30px;
    outline: none;
    margin: 0px;
    background-color: ${({ theme, backgroundColor }) =>
        theme.colors[backgroundColor as keyof typeof theme.colors]};
    border-radius: 50%;
    border: 2px solid
        ${({ theme, borderColor }) =>
            theme.colors[borderColor as keyof typeof theme.colors]};
`;
const StyledImage = styled(AvatarPrimitive.Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`;

const StyledFallback = styled(AvatarPrimitive.Fallback)<{
    backgroundColor: string;
}>`
    width: 30px;
    height: 30px;
    outline: none;
    border-radius: 99999px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, backgroundColor }) =>
        theme.colors[backgroundColor as keyof typeof theme.colors]};
    font-family: ${({ theme }) => theme.fontFamily.inter};
    color: ${({ theme }) => theme.colors.white};
    font-size: 12px;
    line-height: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.default};
    box-shadow: none;
`;

export const AvatarContainer = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

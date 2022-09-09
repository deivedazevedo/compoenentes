import React, { ReactFragment, useEffect } from "react";
import { AvatarContainer, AvatarFallback, AvatarImage } from "./style";

interface IAvatar {
    haveStatus: boolean;
    firstName: string;
    lastName: string;
    image?: string;
    email?: string;
    telephone?: string;
    isOnLine?: boolean;
}

const Avatar = ({
    haveStatus,
    firstName,
    lastName,
    image,
    email,
    telephone,
    isOnLine
}: IAvatar) => {
    const colors = [
        "purple",
        "gray60",
        "redA200",
        "red500",
        "islamicGreen",
        "caribbeanGreen",
        "blueBolt",
        "ultramarineBlue",
        "majorelleBlue",
        "purplePizzazz",
        "congoPink",
        "yellow",
        "orange"
    ];
    const bgColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <>
            <AvatarContainer
                borderColor={isOnLine ? "greenA700" : "gray110"}
                backgroundColor={bgColor}
            >
                <AvatarImage src="" />
                <AvatarFallback delayMs={600} backgroundColor={bgColor}>
                    {firstName?.charAt(0).toUpperCase()}
                    {lastName?.charAt(0).toUpperCase()}
                </AvatarFallback>
            </AvatarContainer>
        </>
    );
};

export default Avatar;

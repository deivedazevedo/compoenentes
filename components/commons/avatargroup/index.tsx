import React, { ReactElement, ReactFragment, lazy } from "react";
import { Avatar, Title, AvatarContainer } from "./style";
import HoverCard from "../hovercard";

interface IAvatar {
    firstName: string;
    lastName: string;
    photo: string;
    isOnline: boolean;
}

interface IAvatarGroup {
    title?: string;
    maxToShow: number;
    size: number | "large" | "small" | "default";
    avatars: Array<IAvatar>;
}

const Error = () => {
    console.log("error");
};

const AvatarGroup = ({
    title,
    maxToShow,
    size,
    avatars
}: IAvatarGroup): ReactElement => {
    const getParameters = (avatar, index, length) => {
        const parameters = {
            key: index,
            index,
            borderColor: avatar.isOnline ? "greenA700" : "gray110",
            length
        };
        if (avatar.photo) {
            Object.assign(parameters, {
                src: avatar.photo
            });
        }
        return parameters;
    };
    var t;
    return (
        <AvatarContainer>
            <Title>{title}</Title>
            <Avatar.Group
                maxCount={maxToShow}
                size={size}
                maxStyle={{
                    backgroundColor: "#6132E8",
                    border: "2px solid #1E1E1E",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "-12px"
                }}
            >
                {
                    (t = avatars.map((element, index) => {
                        return (
                            <>
                                <Avatar
                                    {...getParameters(
                                        element,
                                        index,
                                        avatars.length
                                    )}
                                >
                                    {element.firstName?.charAt(0).toUpperCase()}
                                    {element.lastName?.charAt(0).toUpperCase()}
                                </Avatar>
                            </>
                        );
                    }))
                }
            </Avatar.Group>
            <HoverCard>{t[0]}</HoverCard>
        </AvatarContainer>
    );
};

export default AvatarGroup;

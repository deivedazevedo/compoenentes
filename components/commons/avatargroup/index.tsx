import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { AvatarProps, Divider, Tooltip } from "antd";
import React, { ReactElement, ReactFragment, lazy } from "react";
import { Avatar, Title, AvatarContainer } from "./style";

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

const RenderAvatar = (avatars: Array<IAvatar>) =>
    avatars.map((element, index) => {
        return (
            <Avatar
                key={index}
                index={index}
                src={element.photo}
                borderColor={element.isOnline ? "greenA700" : "gray110"}
            >
                {element.firstName[0]}
                {element.lastName[0]}
            </Avatar>
        );
    });

const AvatarGroup = ({
    title,
    maxToShow,
    size,
    avatars
}: IAvatarGroup): ReactElement => {
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
                {RenderAvatar(avatars)}
            </Avatar.Group>
        </AvatarContainer>
    );
};

export default AvatarGroup;

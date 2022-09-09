import { Children, ReactElement, ReactNode } from "react";
import { displayPartsToString } from "typescript";
import { Side, SideIcon, SideItem, SideLastItem, SideText } from "./styles";

type SideBarPropTypes = {
    children: ReactNode;
};

const SideBar = ({ children }: SideBarPropTypes): ReactElement => {
    return <Side>{children}</Side>;
};

type ItemTextPropTypes = {
    text: string;
};

const ItemText = ({ text }: ItemTextPropTypes): ReactElement => {
    return <SideText>{text}</SideText>;
};

type ItemIconPropTypes = {
    children: ReactNode;
};

const ItemIcon = ({ children }: ItemIconPropTypes): ReactElement => {
    return <SideIcon>{children}</SideIcon>;
};

type ItemPropTypes = {
    children: ReactNode | ReactNode[];
};

const Item = ({ children }: ItemPropTypes): ReactElement => {
    return <SideItem>{children}</SideItem>;
};

const LastItem = ({ children }: ItemPropTypes): ReactElement => {
    return <SideLastItem>{children}</SideLastItem>;
};

ItemText.displayName = "ItemText";
SideBar.ItemText = ItemText;

ItemIcon.displayName = "ItemIcon";
SideBar.ItemIcon = ItemIcon;

Item.displayName = "Item";
SideBar.Item = Item;

LastItem.displayName = "LastItem";
SideBar.LastItem = LastItem;

export default SideBar;

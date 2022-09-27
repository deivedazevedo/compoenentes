import Link from "next/link";
import { ReactElement, ReactNode, useState } from "react";
import { Side, SideIcon, SideItem, SideText, SideTitle } from "./styles";

type SideBarPropTypes = {
    children: ReactNode;
};

const SideBar = ({ children }: SideBarPropTypes): ReactElement => {
    const [state, setState] = useState("Closed");

    return <Side data-state={state}>{children}</Side>;
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
    href: string;
    children: ReactNode | ReactNode[];
};

const Item = ({ children, href }: ItemPropTypes): ReactElement => {
    return (
        <Link href={href}>
            <SideItem>{children}</SideItem>
        </Link>
    );
};

const Title = ({ text }: ItemTextPropTypes): ReactElement => {
    return <SideTitle>{text}</SideTitle>;
};

Title.displayName = "Title";
SideBar.Title = Title;

ItemText.displayName = "ItemText";
SideBar.ItemText = ItemText;

ItemIcon.displayName = "ItemIcon";
SideBar.ItemIcon = ItemIcon;

Item.displayName = "Item";
SideBar.Item = Item;

export default SideBar;

import { ReactNode } from "react";

export interface IReactChildren {
    children: ReactNode | ReactNode[];
}

export interface IGridColumnsContent {
    children: ReactNode;
    columns: number;
    columnsTablet: number;
    columnsMobile: number;
}

export interface ITheme {
    colors: Record<string, string>;
    fontSize: {
        xs: string;
        default: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        xxxl: string;
        special: string;
    };
    fontFamily: {
        space: string;
        inter: string;
    };
}

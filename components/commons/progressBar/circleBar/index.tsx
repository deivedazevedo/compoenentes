import { ReactElement, ReactNode } from "react";
import { CircleDash } from "./styles";

interface CircleBar {
    percent: number;
    strokeColor?: string;
    strokeWidth?: number;
    children?: ReactNode | ReactNode[];
}

const CircleProgress = ({
    percent = 60,
    strokeColor = "green",
    strokeWidth = 6,
    children = undefined
}: CircleBar): ReactElement => {
    return (
        <CircleDash
            type="dashboard"
            percent={percent}
            strokeColor={strokeColor}
            status={"normal"}
            strokeWidth={strokeWidth}
            format={() => {
                children;
            }}
        />
    );
};

export default CircleProgress;

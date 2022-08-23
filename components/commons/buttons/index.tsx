import React, {
    lazy,
    ReactElement,
    useCallback,
    useEffect,
    useState
} from "react";

import { StyledButton } from "./style";

const importButtonIcon = (iconName: string) => {
    return lazy(() =>
        import(`../../../assets/svgs/${iconName}`).catch(() => {
            throw new Error("An error occurred. Please try again");
        })
    );
};

const VARIANT_CONFIG = {
    primary: {
        bgColor: "purple70",
        hoverColor: "purple83",
        focusColor: "purple90"
    },
    secondary: {
        bgColor: "gray90",
        hoverColor: "purple70",
        focusColor: "purple83"
    },
    terciary: {
        bgColor: "transparent",
        hoverColor: "gray100",
        focusColor: "purple90"
    }
};

type PropTypes = {
    text: string;
    width?: "max-content" | "full";
    color?: string;
    icon?: string | undefined;
    alignIcon?: "left" | "right" | "none";
    disabled?: boolean;
    onClick?: () => void;
    onFocus?: () => void;
    type?: string;
    variant: string;
};

const Button = ({
    text,
    width = "max-content",
    color = "white",
    icon = undefined,
    alignIcon = "left",
    disabled = false,
    onClick,
    onFocus,
    type = "button",
    variant = "primary"
}: PropTypes): ReactElement => {
    const [btnIcon, setBtnIcon] = useState<ReactElement | undefined>(undefined);

    const handleImport = useCallback(
        async (iconName: string): Promise<ReactElement> => {
            const IconComponent = await importButtonIcon(iconName);
            // @ts-ignore
            return <IconComponent color={color} />;
        },
        [color]
    );

    useEffect(() => {
        if (icon) {
            ((): void => {
                const iconPromise = handleImport(icon);

                Promise.resolve(iconPromise)
                    .then(setBtnIcon)
                    .catch(() =>
                        console.warn("An error occurred. Please try again")
                    );
            })();
        }
    }, [handleImport, icon]);

    return (
        <StyledButton
            width={width}
            color={color}
            disabled={disabled}
            onClick={onClick}
            onFocus={onFocus}
            type={type}
            bgColor={
                VARIANT_CONFIG[variant as keyof typeof VARIANT_CONFIG].bgColor
            }
            hoverColor={
                VARIANT_CONFIG[variant as keyof typeof VARIANT_CONFIG]
                    .hoverColor
            }
            focusColor={
                VARIANT_CONFIG[variant as keyof typeof VARIANT_CONFIG]
                    .focusColor
            }
        >
            {icon && alignIcon === "left" ? btnIcon : undefined}
            {text}
            {icon && alignIcon === "right" ? btnIcon : undefined}
        </StyledButton>
    );
};

export default Button;

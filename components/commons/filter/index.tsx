import { Select } from "antd";
import React, {
    ReactElement,
    useState,
    lazy,
    useCallback,
    useEffect
} from "react";

const { Option } = Select;

interface Item {
    icon: string;
    name: string;
}

interface FilterSelect {
    items: Array<Item>;
    width?: "auto" | "full" | string;
}

const importButtonIcon = (iconName: string) => {
    return lazy(() =>
        import(`@assets/svgs/${iconName}`).catch(() => {
            throw new Error("An error occurred. Please try again");
        })
    );
};

const Filter = ({ items, width }: FilterSelect): ReactElement => {
    const [item, setItem] = useState<Item>(items[0]);
    const [itemIcon, setIcon] = useState<ReactElement | undefined>();

    const handleItemChange = value => {
        setItem(items[value]);
    };
    const handleImport = useCallback(
        async (iconName: string): Promise<ReactElement> => {
            const IconComponent = await importButtonIcon(iconName);

            return <IconComponent />;
        },
        []
    );

    useEffect(() => {
        if (item.icon) {
            ((): void => {
                const iconPromise = handleImport(item.icon);

                Promise.resolve(iconPromise)
                    .then(setIcon)
                    .catch(() =>
                        console.warn("An error occurred. Please try again")
                    );
            })();
        }
    }, [handleImport, item.icon]);

    return (
        <>
            <Select
                defaultValue={items[0]}
                style={{
                    width: "max-content"
                }}
                onChange={handleItemChange}
            >
                {items.map((item, index) => {
                    return (
                        <>
                            {item.icon ? itemIcon : undefined}
                            <Option key={index}>{item.name}</Option>
                        </>
                    );
                })}
            </Select>
        </>
    );
};

export default Filter;

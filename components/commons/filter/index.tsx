import * as Select from "@radix-ui/react-select";
import { SelectPortal, SelectTrigger, SelectIcon } from "./style";

const SelectFilter = () => (
    <Select.Root>
        <SelectTrigger style={{ width: "100%" }}>
            <Select.Value />

            <SelectIcon />
        </SelectTrigger>
        <SelectPortal>
            <Select.Content>
                <Select.ScrollUpButton />

                <Select.Viewport>
                    <Select.Item value="deived">
                        <Select.ItemText />
                        <p>vasco</p>
                        <Select.ItemIndicator />
                    </Select.Item>
                    <Select.Group>
                        <Select.Label title="time" />

                        <Select.Item value="lolo">
                            <Select.ItemText />
                            <p>vasco</p>
                            <Select.ItemIndicator />
                        </Select.Item>
                    </Select.Group>
                    <Select.Separator />
                </Select.Viewport>

                <Select.ScrollDownButton />
            </Select.Content>
        </SelectPortal>
    </Select.Root>
);

export default SelectFilter;

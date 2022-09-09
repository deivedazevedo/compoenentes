import * as Select from "@radix-ui/react-select";
import styled from "styled-components";

export const SelectPortal = styled(Select.Portal)`
    width: max-content;
`;

export const SelectTrigger = styled(Select.Trigger)<{ width: number }>`
    width: ${width => width};
`;

export const SelectIcon = styled(Select.Icon)`
    background-color: white;
`;

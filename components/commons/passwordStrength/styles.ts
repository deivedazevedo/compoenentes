import styled from "styled-components";

export const StyledStrengthContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1ft);
    width: 100%;
    gap: 5px;
    background-color: transparent;
`;

export const StyledStrength = styled.div<{ backgroundColor: string }>`
    background-color: ${({ theme, backgroundColor }) =>
        theme.colors[backgroundColor as keyof typeof theme.colors]};
    width: 100%;
`;

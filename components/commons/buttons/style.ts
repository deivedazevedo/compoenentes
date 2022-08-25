import styled from "styled-components";

export const StyledButton = styled.button<{
    bgColor: string;
    hoverColor: string;
    focusColor: string;
    width: string;
}>`
    padding: 9px 15px;
    background-color: ${({ theme, bgColor }) =>
        theme.colors[bgColor as keyof typeof theme.colors]};
    border-radius: 5px;
    border: none;
    &:focus {
        outline: none;
        background-color: ${({ theme, focusColor }) =>
            theme.colors[focusColor as keyof typeof theme.colors]};
    }
    &:hover {
        background-color: ${({ theme, hoverColor }) =>
            theme.colors[hoverColor as keyof typeof theme.colors]};
    }
    font-family: ${({ theme }) => theme.fontFamily.inter};
    color: ${({ theme }) => theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    font-size: 13px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    width: ${({ width }) => width};
`;

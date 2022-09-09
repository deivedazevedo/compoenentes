import styled from "styled-components";
import { Avatar as AvatarAntd } from "antd";
import "antd/dist/antd.css";

export const Title = styled.h1`
    text-align: right;
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: 13px;
    font-family: ${({ theme }) => theme.fontFamily.inter};
    margin: 5px 0px;
`;

export const AvatarContainer = styled.div`
    width: max-content;
`;

export const Avatar = styled(AvatarAntd)<{
    index: number;
    length: number;
    borderColor: string;
}>`
    &&& {
        border: 2px solid
            ${({ theme, borderColor }) =>
                theme.colors[borderColor as keyof typeof theme.colors]};
        font-size: 12px;
        background-color: ${({ theme }) => theme.colors.gray100};
        color: ${({ theme }) => theme.colors.white};
        cursor: pointer;
        font-weight: ${({ theme }) => theme.fontWeight.default};
        font-family: ${({ theme }) => theme.fontFamily.inter};
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: ${({ index, length }) =>
            index == 0 || index == length - 1 ? "0px" : "-13px"};
    }
`;

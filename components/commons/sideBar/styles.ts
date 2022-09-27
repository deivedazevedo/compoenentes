import styled from "styled-components";

export const Side = styled.nav`
    box-sizing: border-box;
    min-height: 100vh;
    position: relative;
    width: 70px;
    z-index: 999;
    background-color: ${({ theme }) => theme.colors.gray110};
    overflow: hidden;
    transition: 0.3s ease-out;
    cursor: pointer;
    box-shadow: 4px 7px 10px rgba(0, 0, 0, 0.4);
    &:hover {
        width: 300px;
        transition: 0.3s ease-in;
        & > :first-child {
            opacity: 1;
        }
    }
    @media screen and (max-width: 768px) {
        width: 300px;
        transform: translateX(-300px);

        &[data-state="open"] {
            transform: translateX(0);
        }
    }
    & > :first-child {
        opacity: 0;
        transition: 0.3s ease-out;
    }

    & > :last-child {
        position: absolute;
        bottom: 10px;
    }
`;

export const SideItem = styled.button`
    text-align: left;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: left;
    align-content: center;
    min-width: max-content;
    height: 44px;
    margin: 0;
    padding: 0;
    padding-right: 20px;
    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.gray90};
        & > :nth-child(2) {
            color: ${({ theme }) => theme.colors.white};
            transition: 0.125s ease-in;
        }
    }
    &:focus {
        outline: none;
        background: rgba(97, 50, 232, 0.25);
        border: 1px solid ${({ theme }) => theme.colors.purple70};
    }
`;

export const SideIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 40px;
    margin: 0;
    cursor: pointer;
    padding: 0;
`;

export const SideText = styled.p`
    color: ${({ theme }) => theme.colors.gray50};
    font-size: 15px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-style: normal;
    margin: 0;
    font-family: ${({ theme }) => theme.fontFamily.inter};
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(300px - 90px);
`;

export const SideTitle = styled.span`
    align-items: flex-start;
    display: block;
    padding: 14px 0;
    padding-left: 17.47px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 15px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-style: normal;
    font-family: ${({ theme }) => theme.fontFamily.inter};
    line-height: 24px;
`;

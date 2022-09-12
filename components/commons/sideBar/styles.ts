import styled from "styled-components";

export const Side = styled.nav`
    position: fixed;
    top: 0;
    height: 100%;
    width: 40px;
    z-index: 100;
    background-color: ${({ theme }) => theme.colors.gray110};
    overflow: hidden;

    transition: width 0.7s ease;
    transform: translate(-10px);
    cursor: pointer;
    box-shadow: 4px 7px 10px rgba(0, 0, 0, 0.4);
    &:hover {
        width: 150px;
        & > :first-child {
            opacity: 1;
            transition: 0.3s ease-in;
        }
    }
    /* @media screen and (min-width: 600px) {
        width: 40px;
    } */
    @media screen and (max-width: 600px) {
        width: 5px;
    }
    & > :first-child {
        opacity: 0;
        transition: 0.3s ease-out;
    }
`;

export const SideItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    align-content: center;
    width: 200px;
    margin: 0;
    padding: 0;
    &:hover {
        background-color: ${({ theme }) => theme.colors.gray90};
        & > :nth-child(2) {
            color: ${({ theme }) => theme.colors.white};
            transition: 0.125s ease-in;
        }
    }
`;

export const SideIcon = styled.div`
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 0;
    cursor: pointer;

    @media screen and(min-width:600px) {
        width: 150px;
        height: 100px;
    }
`;

export const SideText = styled.p`
    padding-left: 10px;
    color: ${({ theme }) => theme.colors.gray50};
    font-size: 8px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-style: normal;
    margin: 0;
    font-family: ${({ theme }) => theme.fontFamily.inter};
    line-height: 24px;
`;

export const SideLastItem = styled.div`
    display: flex;
    position: absolute;
    justify-content: left;
    align-content: center;
    bottom: 10px;

    align-items: center;
    width: 200px;
    &:hover {
        background-color: ${({ theme }) => theme.colors.gray90};
        & > :nth-child(2) {
            color: ${({ theme }) => theme.colors.white};
            transition: 0.125s ease-in;
        }
    }
`;

export const SideTitle = styled.span`
    align-items: flex-start;
    padding-left: 17.47px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 8px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-style: normal;
    font-family: ${({ theme }) => theme.fontFamily.inter};
    line-height: 24px;
`;

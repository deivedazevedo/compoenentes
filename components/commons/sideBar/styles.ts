import styled from "styled-components";

export const Side = styled.nav`
    position: fixed;
    top: 0;
    height: 400px;
    width: 210px;
    z-index: 100;
    background-color: ${({ theme }) => theme.colors.gray110};
    overflow: hidden;
    transition: width 0.7s ease;
    transform: translate(-10px);
    cursor: pointer;
    box-shadow: 4px 7px 10px rgba(0, 0, 0, 0.4);
    &:hover {
        width: 150px;
    }
    @media screen and (min-width: 600px) {
        width: 40px;
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
    flex-wrap: wrap;
    /* margin-top: 100px; */
    align-items: center;
    width: 200px;
    border: 1px solid red;
    &:hover {
        background-color: ${({ theme }) => theme.colors.gray90};
    }
`;

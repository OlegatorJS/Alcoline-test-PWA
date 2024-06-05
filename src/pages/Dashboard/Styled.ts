import styled from "styled-components";
import { Button, Card, Collapse, Divider, Layout, Typography } from "antd";
import FlexContainer from "@/shared/elements/FlexContainer";
import { Link } from "react-router-dom";

export const MainContainer = styled(Layout)`
    height: calc(100dvh - 124px);
    overflow-y: auto;
    width: 100%;
    padding: 16px;
`;

export const StyledCollapse = styled(Collapse)`
    width: 100%;
    border: none;
`;

export const UserInfo = styled(FlexContainer)`
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    gap: 12px;
`;

export const InfoContainerList = styled(Card)`
    border-radius: 10px;
    border: none;
    width: 100%;
`;

export const InfoContainerListItem = styled(FlexContainer)`
    align-items: flex-start;
    border-bottom: 1px solid #313131;
    padding: 16px 0;
    gap: 12px;
`;

export const InfoContainerListTopBlock = styled(FlexContainer)`
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #313131;
    padding-bottom: 16px;
    gap: 12px;
`;

export const InfoContainerListCenterBlock = styled(FlexContainer)`
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #313131;
    padding: 16px 0;
    gap: 12px;
`;

export const InfoContainerListBottomBlock = styled(FlexContainer)`
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    gap: 12px;
`;

export const InfoContainerListTheme = styled(FlexContainer)`
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 16px;
    gap: 12px;
`;

export const UserInfoTitle = styled(Typography)<{ primaryColor?: boolean }>`
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    ${({ primaryColor }) => (primaryColor ? `color: #1677FF` : "")};
`;

export const StyledScore = styled(Typography)<{ increase?: boolean }>`
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
    color: ${({ increase }) => (increase ? "#52C41A" : "#FF4D4F")};
`;

export const UserInfoDescriptionText = styled(Typography)`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #d3d3d4;
`;

export const CollapseWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CollapseItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
`;

export const StyledDivider = styled(Divider)`
    margin: 0;
`;

export const OfflineButton = styled(Button)<{ isActive: boolean }>`
    background-color: ${({ isActive }) =>
        isActive ? "#FF4D4F" : "transparent"};
    color: ${({ isActive }) => (isActive ? "#ffffff" : "#FF4D4F")};
    border-color: #ff4d4f;
    :global(.ant-btn-primary) {
        &:hover,
        &:active {
            color: ${({ isActive }) => (isActive ? "#ffffff" : "#FF4D4F")};
            border-color: #ff4d4f;
        }
    }
`;

export const OnlineButton = styled(Button)<{ isActive: boolean }>`
    background-color: ${({ isActive }) =>
        isActive ? "#52C41A" : "transparent"};
    color: ${({ isActive }) => (isActive ? "#ffffff" : "#52C41A")};
    border-color: #52c41a;
    :global(.ant-btn-primary) {
        &:hover,
        &:active {
            color: ${({ isActive }) => (isActive ? "#ffffff" : "#52C41A")};
            border-color: #52c41a;
        }
    }
`;

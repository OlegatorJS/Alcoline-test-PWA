import styled from "styled-components";
import { Button, Card, Layout, Typography } from "antd";
import FlexContainer from "@/shared/elements/FlexContainer";
import { Link } from "react-router-dom";

export const MainContainer = styled(Layout)`
    height: calc(100dvh - 124px);
    width: 100%;
    padding: 16px;
`;

export const UserHeader = styled(FlexContainer)`
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
`;

export const UserInfo = styled(FlexContainer)`
    padding-top: 32px;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    gap: 12px;
`;

export const InfoContainerList = styled(Card)`
    gap: 16px;
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

export const InfoContainerListAccount = styled(FlexContainer)`
    align-items: flex-start;
    border-bottom: 1px solid #313131;
    padding-bottom: 16px;
    gap: 12px;
`;

export const InfoContainerListTheme = styled(FlexContainer)`
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 16px;
    gap: 12px;
`;

export const UserInfoTitle = styled(Typography)`
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
`;

export const UserInfoText = styled(Typography)`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
`;

export const UserInfoDescriptionText = styled(Typography)`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #d3d3d4;
`;

export const CertificationBlock = styled(Card)`
    margin-top: 8px;
    gap: 16px;
    border-radius: 10px;
    border: none;
    width: 100%;
`;

export const StyledButton = styled(Button)`
    height: 50px;
    border-radius: 50px;
    width: 100%;
    font-size: 16px;
    margin-top: 10px;
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

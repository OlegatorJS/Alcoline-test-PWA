import styled from "styled-components";
import { Card, Layout, Typography } from "antd";
import FlexContainer from "@/shared/elements/FlexContainer";
import { Link } from "react-router-dom";

export const MainContainer = styled(Layout)`
    height: calc(100dvh - 60px);
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

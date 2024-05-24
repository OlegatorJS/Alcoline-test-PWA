import styled from "styled-components";
import { Button, Card, Divider, Layout, Typography } from "antd";
import FlexContainer from "@/shared/elements/FlexContainer";

export const MainContainer = styled(Layout)`
    height: calc(100dvh - 124px);
    width: 100%;
    padding: 16px;
`;

export const UserInfo = styled(FlexContainer)`
    margin-top: 16px;
`;

export const InfoContainerList = styled(Card)`
    border-radius: 10px;
    border: none;
    width: 100%;
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

export const TaskDescriptionBlock = styled(Card)`
    margin-top: 8px;
    gap: 16px;
    border-radius: 10px;
    border: none;
    width: 100%;
`;

export const TaskDescriptionText = styled(Typography)`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #d3d3d4;
`;

export const DateText = styled(Typography)`
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: #d3d3d4;
`;

export const TaskDescriptionTitle = styled(Typography)`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    padding: 12px 0;
`;

export const TaskDescriptionHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
`;

export const TaskDescriptionTextArea = styled.div`
    position: relative;
    margin-top: 20px;
    .ant-upload-select {
        position: absolute;
        top: 10px;
        right: 10px;
    }
`;

import styled from "styled-components";
import { Button, Card, Collapse, Divider, Layout, Typography } from "antd";
import FlexContainer from "@/shared/elements/FlexContainer";

export const MainContainer = styled(Layout)`
    height: calc(100dvh - 124px);
    width: 100%;
    padding: 16px;
    overflow-y: auto;
`;

export const StyledCollapse = styled(Collapse)`
    width: 100%;
    border: none;
`;

export const UserInfo = styled(FlexContainer)`
    margin-top: 16px;
`;

export const PointStatusMarker = styled(FlexContainer)<{ hasDuty: boolean }>`
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: ${({ hasDuty }) => (hasDuty ? "#FF4D4F" : "#52C41A")};
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

export const CollapseButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    padding-bottom: 16px;
`;

export const CollapseItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    padding: 16px 0;
`;

export const StyledText = styled(Typography)`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    padding-bottom: 24px;
`;

export const StyledTitle = styled(Typography)`
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    padding-bottom: 16px;
`;

export const StyledButton = styled(Button)`
    height: 50px;
    width: 100%;
    background-color: #52c41a;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding-top: 16px;
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

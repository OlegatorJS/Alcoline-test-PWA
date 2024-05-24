import styled from "styled-components";
import { Button, Layout, Typography } from "antd";
import FlexContainer from "@/shared/elements/FlexContainer";

export const MainContainer = styled(Layout)`
    height: calc(100dvh - 124px);
    width: 100%;
    padding: 16px 16px 0 16px;
`;

export const DutyText = styled(Typography)`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #d3d3d4;
`;

export const DutyValue = styled(Typography)`
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    text-align: left;
    color: #1677ff;
`;

export const DutyTitle = styled(Typography)`
    font-size: 16px;
    font-weight: 400;
    text-align: left;
`;

export const DutyWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
`;

export const DutyTotalWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding-top: 12px;
    gap: 20px;
`;

export const StyledButton = styled(Button)`
    background-color: #52c41a;
    height: 50px;
    width: 100%;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding-top: 16px;
`;

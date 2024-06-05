import styled from "styled-components";
import { Card, Layout, Typography } from "antd";

export const MainContainer = styled(Layout)`
    height: calc(100dvh - 60px);
    width: 100%;
    padding: 16px;
    overflow-y: auto;
`;

export const TaskDescriptionBlock = styled(Card)`
    margin-top: 8px;
    gap: 16px;
    border-radius: 10px;
    border: none;
    width: 100%;
`;

export const DocumentItem = styled.div`
    padding: 12px 0;
    width: 100%;
    border-bottom: 1px solid #313131;
`;

export const TaskDescriptionText = styled(Typography)`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #d3d3d4;
`;

export const TaskTitle = styled(Typography)`
    font-size: 16px;
    padding-bottom: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
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

export const ImageWrapper = styled.div`
    height: 200px;
`;

export const StyledText = styled(Typography)`
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-align: right;
    color: #5f5f5f;
    margin-bottom: 16px;
`;

export const StyledTitle = styled(Typography)`
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    padding-bottom: 16px;
`;

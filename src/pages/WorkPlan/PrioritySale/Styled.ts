import styled from "styled-components";
import { Button, Layout, Typography } from "antd";
import FlexContainer from "@/shared/elements/FlexContainer";
import Search from "antd/es/input/Search";

export const MainContainer = styled(Layout)`
    height: calc(100dvh - 60px);
    width: 100%;
    padding: 16px 16px 0 16px;
    overflow-y: auto;
`;

export const GoodsText = styled(Typography)`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    width: 50%;
    color: #d3d3d4;
`;

export const SaleText = styled(Typography)<{ bold?: boolean }>`
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    text-align: left;
    color: #d3d3d4;
`;

export const DutyTitle = styled(Typography)`
    font-size: 16px;
    font-weight: 400;
    text-align: left;
`;

export const GoodsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const GoodsItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 0;
    gap: 8px;
    justify-content: space-between;
    border-bottom: 1px solid #313131;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: 20px;
`;

export const StyledSearch = styled(Search)`
    height: 50px;
`;

export const ButtonsCheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
`;

export const StyledTypography = styled(Typography)`
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: right;
    color: #1677ff;
`;

export const StyledTitle = styled(Typography)`
    width: 60%;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    text-align: left;
    color: #fff;
`;

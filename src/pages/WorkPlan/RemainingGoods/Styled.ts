import styled from "styled-components";
import { Button, Layout, Typography } from "antd";
import FlexContainer from "@/shared/elements/FlexContainer";
import Search from "antd/es/input/Search";

export const MainContainer = styled(Layout)`
    height: calc(100dvh - 124px);
    width: 100%;
    padding: 16px 16px 0 16px;
`;

export const GoodsText = styled(Typography)`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #d3d3d4;
`;

export const StyledDecrement = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1d1d1d;
    border: 1px solid #313131;
    color: #ffffff;
    width: 70px;
    border-radius: 6px 0 0 6px;
`;

export const StyledIncrement = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1d1d1d;
    border: 1px solid #313131;
    color: #ffffff;
    width: 70px;
    border-radius: 0 6px 6px 0;
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
    padding: 16px 0;
    border-bottom: 1px solid #313131;
    gap: 20px;
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

export const NumberWrapper = styled.div`
    display: flex;
    width: 40%;
`;

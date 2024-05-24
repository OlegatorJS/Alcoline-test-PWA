import styled from "styled-components";
import { Collapse, Layout, Typography } from "antd";
import Search from "antd/es/input/Search";

export const MainContainer = styled(Layout)`
    height: calc(100dvh - 124px);
    width: 100%;
    padding: 16px 16px 0 16px;
`;

export const GoodsItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: space-between;
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

export const StyledTitle = styled(Typography)`
    width: 60%;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    text-align: left;
    color: #fff;
`;

export const StyledFormTitle = styled(Typography)`
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    color: #fff;
`;

export const StyledTypography = styled(Typography)`
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: right;
    color: #1677ff;
`;

export const SaleText = styled(Typography)<{ bold?: boolean }>`
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    text-align: left;
    color: #d3d3d4;
`;

export const StyledCollapse = styled(Collapse)`
    width: 100%;
    border: none;
    .ant-collapse-header {
        align-items: center!important;
    }
`;

export const CollapseWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CollapseItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

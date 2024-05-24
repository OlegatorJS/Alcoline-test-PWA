import styled from "styled-components";
import { Card, Layout, Typography } from "antd";

export const StyledFooter = styled(Layout.Footer)`
    padding: 9px 16px;
    height: 60px;
`;

export const StyledTypography = styled(Typography)<{ isActive: boolean }>`
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    margin-top: 4px;
    ${({ isActive }) => (isActive ? `color: #1677FF` : "")};
`;

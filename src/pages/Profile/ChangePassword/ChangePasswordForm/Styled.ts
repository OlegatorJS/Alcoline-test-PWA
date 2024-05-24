import styled from "styled-components";
import { Button, Card, Flex, Input, Layout, Typography } from "antd";

export const StyledInput = styled(Input)`
    height: 47px;
    border-radius: 4px;
`;

export const StyledText = styled(Typography)`
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    text-align: left;
    color: #d3d3d4;
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
    border-radius: 50px;
    width: 100%;
    font-size: 16px;
`;

export const PasswordValidationWrapper = styled(Card)`
    border-radius: 4px;
    margin-bottom: 8px;
`;

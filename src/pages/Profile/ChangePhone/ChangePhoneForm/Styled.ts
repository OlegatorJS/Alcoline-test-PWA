import styled from "styled-components";
import { Button, Input, Typography } from "antd";

export const StyledInput = styled(Input)`
    height: 47px;
    border-radius: 4px;
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
    border-radius: 50px;
    width: 100%;
    font-size: 16px;
`;

import styled from "styled-components";
import { Button, Input } from "antd";

const { Password } = Input;

export const StyledInput = styled(Input)`
    height: 47px;
    border-radius: 4px;
`;

export const StyledPassword = styled(Password)`
    height: 47px;
    border-radius: 4px;
`;
export const StyledButton = styled(Button)`
    height: 50px;
    border-radius: 50px;
    width: 100%;
    font-size: 16px;
`;

import styled from "styled-components";
import { Layout, Typography } from "antd";
import FlexContainer from "@/shared/elements/FlexContainer";
import { Link } from "react-router-dom";

export const MainContainer = styled(Layout)`
    height: calc(100dvh);
    width: 100%;
`;

export const CompanyLogoContainer = styled(FlexContainer)`
    padding-top: 37px;
`;

export const CompanyLogo = styled.img``;

export const AuthWrapper = styled(FlexContainer)`
    padding-top: 104px;
`;

export const ForgetPasswordWrapper = styled(FlexContainer)`
    padding-top: 16px;
`;

export const StyledLink = styled(Typography)`
    text-align: center;
    cursor: pointer;
    font-size: 14px;
`;

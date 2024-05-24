import styled from "styled-components";
import { Layout, Typography } from "antd";
import FlexContainer from "@/shared/elements/FlexContainer";

export const MainContainer = styled(Layout)`
    height: calc(100dvh - 60px);
    width: 100%;
`;

export const CompanyLogoContainer = styled(FlexContainer)`
    padding-top: 37px;
`;

export const CompanyLogo = styled.img``;

export const AuthWrapper = styled(FlexContainer)`
    padding-top: 24px;
`;

export const ForgetPasswordWrapper = styled(FlexContainer)`
    padding-top: 16px;
`;

export const StyledLink = styled(Typography)`
    text-align: center;
    cursor: pointer;
    font-size: 14px;
`;

export const StyledText = styled(Typography)`
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    text-align: left;
`;

export const StyledDescriptionWrapper = styled.div`
    padding: 8px 16px 0 16px;
`;

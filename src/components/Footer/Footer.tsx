import React, { useEffect, useLayoutEffect, useRef } from "react";
import { StyledFooter, StyledTypography } from "@/components/Footer/Styled";
import FlexContainer from "@/shared/elements/FlexContainer";
import {
    UserOutlined,
    ShoppingOutlined,
    PieChartFilled,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography } from "antd";

const Footer = () => {
    const currentLocation = useRef("");
    const navigate = useNavigate();
    const location = useLocation();
    currentLocation.current = location.pathname?.split("/")[1];

    return (
        <StyledFooter>
            <FlexContainer height="100%" justifyContent="space-between">
                <FlexContainer flexDirection="column">
                    <PieChartFilled
                        onClick={() => navigate("/dashboard")}
                        style={{
                            width: "22px",
                            height: "22px",
                            fontSize: "22px",
                            color:
                                currentLocation.current === "dashboard"
                                    ? "#1677FF"
                                    : "",
                        }}
                    />
                    <StyledTypography
                        isActive={currentLocation.current === "dashboard"}
                    >
                        Dashboard
                    </StyledTypography>
                </FlexContainer>
                <FlexContainer flexDirection="column">
                    <UserOutlined
                        onClick={() => navigate("/profile")}
                        style={{
                            width: "22px",
                            height: "22px",
                            fontSize: "22px",
                            color:
                                currentLocation.current === "profile"
                                    ? "#1677FF"
                                    : "",
                        }}
                    />
                    <StyledTypography
                        isActive={currentLocation.current === "profile"}
                    >
                        Профіль
                    </StyledTypography>
                </FlexContainer>
                <FlexContainer flexDirection="column">
                    <ShoppingOutlined
                        onClick={() => navigate("/work-plan")}
                        style={{
                            width: "22px",
                            height: "22px",
                            fontSize: "22px",
                            color:
                                currentLocation.current === "work-plan"
                                    ? "#1677FF"
                                    : "",
                        }}
                    />
                    <StyledTypography
                        isActive={currentLocation.current === "work-plan"}
                    >
                        План Робіт
                    </StyledTypography>
                </FlexContainer>
            </FlexContainer>
        </StyledFooter>
    );
};

export default Footer;

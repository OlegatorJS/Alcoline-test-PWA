import React from "react";
import { StyledHeader, StyledTypography } from "@/components/Header/Styled";
import FlexContainer from "@/shared/elements/FlexContainer";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    path?: string;
    title?: string;
    children?: React.ReactNode;
}

const Header = ({ path, title, children }: HeaderProps) => {
    const navigate = useNavigate();
    return (
        <StyledHeader>
            {path ? (
                <FlexContainer
                    height="100%"
                    alignItems="center"
                    justifyContent="flex-start"
                    gap="28px"
                >
                    <LeftOutlined
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate(path)}
                    />
                    <StyledTypography>{title}</StyledTypography>
                </FlexContainer>
            ) : (
                <FlexContainer height="100%" alignItems="center">
                    {title ? (
                        <StyledTypography>{title}</StyledTypography>
                    ) : null}
                    {children || null}
                </FlexContainer>
            )}
        </StyledHeader>
    );
};

export default Header;

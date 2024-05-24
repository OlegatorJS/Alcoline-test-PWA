import Meta from "@/components/Meta";
import {
    InfoContainerList,
    MainContainer,
    UserInfo,
    UserInfoDescriptionText,
    UserInfoTitle,
    InfoContainerListBottomBlock,
    InfoContainerListTopBlock,
    InfoContainerListCenterBlock,
    StyledCollapse,
    CollapseWrapper,
    CollapseItem,
    StyledDivider,
    StyledScore,
    OfflineButton,
    OnlineButton,
} from "@/pages/Dashboard/Styled";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import FlexContainer from "@/shared/elements/FlexContainer";
import { CollapseProps, Typography } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setStatus } from "@/store/slices/UserSlice";

function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { online } = useAppSelector((state) => state.user);

    const items: CollapseProps["items"] = [
        {
            key: "1",
            label: "План для команди",
            children: (
                <CollapseWrapper>
                    <CollapseItem>
                        <UserInfoTitle>Продукт 1</UserInfoTitle>
                        <FlexContainer gap="8px">
                            <FlexContainer flexDirection="column">
                                <StyledScore increase>25</StyledScore>
                                <Typography style={{ fontSize: "12px" }}>
                                    100
                                </Typography>
                            </FlexContainer>
                            <ArrowUpOutlined style={{ color: "#52C41A" }} />
                        </FlexContainer>
                    </CollapseItem>
                    <StyledDivider />
                    <CollapseItem>
                        <UserInfoTitle>Продукт 2</UserInfoTitle>
                        <FlexContainer gap="8px">
                            <FlexContainer flexDirection="column">
                                <StyledScore increase>120</StyledScore>
                                <Typography style={{ fontSize: "12px" }}>
                                    100
                                </Typography>
                            </FlexContainer>
                            <ArrowUpOutlined style={{ color: "#52C41A" }} />
                        </FlexContainer>
                    </CollapseItem>
                    <StyledDivider />
                    <CollapseItem>
                        <UserInfoTitle>Продукт 3</UserInfoTitle>
                        <FlexContainer gap="8px">
                            <FlexContainer flexDirection="column">
                                <StyledScore increase>112</StyledScore>
                                <Typography style={{ fontSize: "12px" }}>
                                    100
                                </Typography>
                            </FlexContainer>
                            <ArrowUpOutlined style={{ color: "#52C41A" }} />
                        </FlexContainer>
                    </CollapseItem>
                </CollapseWrapper>
            ),
        },
        {
            key: "2",
            label: "Персональний план",
            children: <div>Продукт 2</div>,
        },
    ];

    return (
        <>
            <Meta title="TaskDetails" />
            <Header
                children={
                    <FlexContainer gap="16px">
                        <OfflineButton
                            isActive={!online}
                            onClick={() => dispatch(setStatus(false))}
                        >
                            Офлайн
                        </OfflineButton>
                        <OnlineButton
                            isActive={online}
                            onClick={() => dispatch(setStatus(true))}
                        >
                            Онлайн
                        </OnlineButton>
                    </FlexContainer>
                }
            />
            <MainContainer>
                <UserInfo>
                    <InfoContainerList>
                        <InfoContainerListTopBlock>
                            <FlexContainer
                                flexDirection="column"
                                alignItems="flex-start"
                                gap="12px"
                            >
                                <UserInfoTitle>Команда</UserInfoTitle>
                                <UserInfoDescriptionText>
                                    Команда
                                </UserInfoDescriptionText>
                            </FlexContainer>
                        </InfoContainerListTopBlock>
                        <InfoContainerListCenterBlock>
                            <FlexContainer
                                flexDirection="column"
                                alignItems="flex-start"
                                gap="12px"
                            >
                                <UserInfoTitle>Район</UserInfoTitle>
                                <UserInfoDescriptionText>
                                    Селище Котовського
                                </UserInfoDescriptionText>
                            </FlexContainer>
                        </InfoContainerListCenterBlock>
                        <InfoContainerListBottomBlock
                            onClick={() => navigate("/profile/change-phone")}
                        >
                            <FlexContainer
                                flexDirection="column"
                                alignItems="flex-start"
                                gap="12px"
                            >
                                <UserInfoTitle>Супервайзер</UserInfoTitle>
                                <UserInfoDescriptionText>
                                    +38 (046) 844 - 63 - 56
                                </UserInfoDescriptionText>
                            </FlexContainer>
                        </InfoContainerListBottomBlock>
                    </InfoContainerList>
                    <InfoContainerList>
                        <FlexContainer
                            gap="12px"
                            flexDirection="column"
                            alignItems="initial"
                        >
                            <FlexContainer justifyContent="space-between">
                                <UserInfoDescriptionText>
                                    Зарплатня
                                </UserInfoDescriptionText>
                                <UserInfoDescriptionText>
                                    Бонуси
                                </UserInfoDescriptionText>
                            </FlexContainer>
                            <FlexContainer justifyContent="space-between">
                                <UserInfoTitle primaryColor>
                                    5 000 грн.
                                </UserInfoTitle>
                                <UserInfoTitle>1 000 грн.</UserInfoTitle>
                            </FlexContainer>
                        </FlexContainer>
                    </InfoContainerList>
                    <StyledCollapse
                        defaultActiveKey={["1"]}
                        expandIconPosition="end"
                        items={items}
                    />
                </UserInfo>
            </MainContainer>
        </>
    );
}

export default Dashboard;

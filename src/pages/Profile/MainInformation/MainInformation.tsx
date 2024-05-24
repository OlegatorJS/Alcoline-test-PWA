import Meta from "@/components/Meta";
import {
    InfoContainerList,
    MainContainer,
    UserHeader,
    UserInfo,
    UserInfoDescriptionText,
    UserInfoText,
    UserInfoTitle,
    InfoContainerListAccount,
    InfoContainerListTheme,
    StyledButton,
    OfflineButton,
    OnlineButton,
} from "@/pages/Profile/MainInformation/Styled";
import { useNavigate } from "react-router-dom";
import { Switch, Avatar } from "antd";
import Header from "@/components/Header";
import {
    UserOutlined,
    RightOutlined,
    MoonOutlined,
    LogoutOutlined,
} from "@ant-design/icons";
import FlexContainer from "@/shared/elements/FlexContainer";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { set } from "@/store/slices/ThemeSlice";
import React from "react";
import { logoutRequest } from "@/store/ActionCreators";
import { setStatus } from "@/store/slices/UserSlice";

function MainInformation() {
    const { type } = useAppSelector((state) => state.theme);
    const { online } = useAppSelector((state) => state.user);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleThemeChange = () => {
        const next = type === "dark" ? "light" : "dark";
        dispatch(set(next));
        localStorage.setItem("theme", next);
    };

    const logoutHandler = async () => {
        await dispatch(logoutRequest());
        navigate("/login");
    };

    return (
        <>
            <Meta title="Profile" />
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
                <UserHeader>
                    <Avatar size={80} icon={<UserOutlined />} />
                    <FlexContainer
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        gap="4px"
                    >
                        <FlexContainer gap="8px">
                            <UserInfoText>petrenko@alcoline.org</UserInfoText>
                        </FlexContainer>
                        <UserInfoText>Петренко Федір</UserInfoText>
                    </FlexContainer>
                </UserHeader>
                <UserInfo>
                    <UserInfoTitle>Особисті дані</UserInfoTitle>
                    <InfoContainerList>
                        <InfoContainerListAccount
                            onClick={() => navigate("/profile/account")}
                        >
                            <UserOutlined
                                style={{
                                    width: "16px",
                                    height: "16px",
                                    fontSize: "16px",
                                }}
                            />
                            <FlexContainer
                                flexDirection="column"
                                alignItems="flex-start"
                                gap="12px"
                            >
                                <UserInfoTitle>Акаунт</UserInfoTitle>
                                <UserInfoDescriptionText>
                                    Керування даними: ім’я, E-mail, номер
                                    телефону, пароль
                                </UserInfoDescriptionText>
                            </FlexContainer>
                            <RightOutlined
                                style={{
                                    width: "16px",
                                    height: "16px",
                                    fontSize: "16px",
                                    margin: "auto",
                                }}
                            />
                        </InfoContainerListAccount>
                        {/*TODO: After MVP*/}
                        {/*<InfoContainerListItem>*/}
                        {/*    <MessageOutlined*/}
                        {/*        style={{*/}
                        {/*            width: "16px",*/}
                        {/*            height: "16px",*/}
                        {/*            fontSize: "16px",*/}
                        {/*        }}*/}
                        {/*    />*/}
                        {/*    <FlexContainer*/}
                        {/*        flexDirection="column"*/}
                        {/*        alignItems="flex-start"*/}
                        {/*        gap="12px"*/}
                        {/*    >*/}
                        {/*        <UserInfoTitle>Повідомлення</UserInfoTitle>*/}
                        {/*        <UserInfoDescriptionText>*/}
                        {/*            Phasellus euismod nunc et est venenatis*/}
                        {/*            bibendum.*/}
                        {/*        </UserInfoDescriptionText>*/}
                        {/*    </FlexContainer>*/}
                        {/*    <RightOutlined*/}
                        {/*        style={{*/}
                        {/*            width: "16px",*/}
                        {/*            height: "16px",*/}
                        {/*            fontSize: "16px",*/}
                        {/*            margin: "auto",*/}
                        {/*        }}*/}
                        {/*    />*/}
                        {/*</InfoContainerListItem>*/}
                        <InfoContainerListTheme>
                            <FlexContainer gap="12px">
                                <MoonOutlined
                                    style={{
                                        width: "16px",
                                        height: "16px",
                                        fontSize: "16px",
                                    }}
                                />
                                <UserInfoTitle>Нічний режим</UserInfoTitle>
                            </FlexContainer>
                            <Switch
                                defaultChecked={type === "dark"}
                                onChange={handleThemeChange}
                            />
                        </InfoContainerListTheme>
                    </InfoContainerList>
                </UserInfo>
                <FlexContainer>
                    <StyledButton
                        type="primary"
                        htmlType="submit"
                        icon={<LogoutOutlined />}
                        onClick={logoutHandler}
                    >
                        Вийти
                    </StyledButton>
                </FlexContainer>
                {/*TODO: After MVP*/}
                {/*<CertificationBlock>*/}
                {/*    <UserInfoTitle>Результат атестації</UserInfoTitle>*/}
                {/*    <UserInfoDescriptionText>*/}
                {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
                {/*        Etiam et ex id mauris scelerisque mattis. Aliquam et*/}
                {/*        eleifend nunc, ut ullamcorper nunc. Sed efficitur eu*/}
                {/*        mauris vel maximus. Suspendisse potenti. Nunc*/}
                {/*        ullamcorper massa libero, ut feugiat elit interdum et.*/}
                {/*        Fusce pharetra erat vel eros volutpat, porta venenatis*/}
                {/*        tortor accumsan.*/}
                {/*    </UserInfoDescriptionText>*/}
                {/*</CertificationBlock>*/}
            </MainContainer>
        </>
    );
}

export default MainInformation;

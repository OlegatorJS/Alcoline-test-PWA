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
} from "@/pages/Profile/Account/Styled";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { RightOutlined } from "@ant-design/icons";
import FlexContainer from "@/shared/elements/FlexContainer";

function Account() {
    const navigate = useNavigate();
    return (
        <>
            <Meta title="Profile" />
            <Header title="Керування даними акаунта" path="/profile" />
            <MainContainer>
                <UserInfo>
                    <UserInfoTitle>Особисті дані</UserInfoTitle>
                    <InfoContainerList>
                        <InfoContainerListTopBlock>
                            <FlexContainer
                                flexDirection="column"
                                alignItems="flex-start"
                                gap="12px"
                            >
                                <UserInfoTitle>ПІБ</UserInfoTitle>
                                <UserInfoDescriptionText>
                                    Петренко Федір
                                </UserInfoDescriptionText>
                            </FlexContainer>
                        </InfoContainerListTopBlock>
                        <InfoContainerListCenterBlock>
                            <FlexContainer
                                flexDirection="column"
                                alignItems="flex-start"
                                gap="12px"
                            >
                                <UserInfoTitle>E-mail</UserInfoTitle>
                                <UserInfoDescriptionText>
                                    petrenko@alcoline.org
                                </UserInfoDescriptionText>
                            </FlexContainer>
                        </InfoContainerListCenterBlock>
                        <InfoContainerListCenterBlock
                            onClick={() => navigate("/profile/change-phone")}
                        >
                            <FlexContainer
                                flexDirection="column"
                                alignItems="flex-start"
                                gap="12px"
                            >
                                <UserInfoTitle>Номер телефону</UserInfoTitle>
                                <UserInfoDescriptionText>
                                    +38 (046) 844 - 63 - 56
                                </UserInfoDescriptionText>
                            </FlexContainer>
                            <RightOutlined
                                style={{
                                    width: "16px",
                                    height: "16px",
                                    fontSize: "16px",
                                }}
                            />
                        </InfoContainerListCenterBlock>
                        <InfoContainerListBottomBlock
                            onClick={() => navigate("/profile/change-password")}
                        >
                            <FlexContainer
                                flexDirection="column"
                                alignItems="flex-start"
                                gap="12px"
                            >
                                <UserInfoTitle>Пароль</UserInfoTitle>
                                <UserInfoDescriptionText>
                                    Змінити пароль
                                </UserInfoDescriptionText>
                            </FlexContainer>
                            <RightOutlined
                                style={{
                                    width: "16px",
                                    height: "16px",
                                    fontSize: "16px",
                                }}
                            />
                        </InfoContainerListBottomBlock>
                    </InfoContainerList>
                </UserInfo>
            </MainContainer>
        </>
    );
}

export default Account;

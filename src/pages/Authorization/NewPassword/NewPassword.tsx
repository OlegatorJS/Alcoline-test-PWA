import Meta from "@/components/Meta";
import {
    AuthWrapper,
    CompanyLogo,
    CompanyLogoContainer,
    ForgetPasswordWrapper,
    MainContainer,
    StyledDescriptionWrapper,
    StyledLink,
    StyledText,
} from "@/pages/Authorization/NewPassword/Styled";
import companyLogo from "../../../assets/icons/trade_master.svg";
import NewPasswordForm from "./NewPasswordForm";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
    const navigate = useNavigate();
    return (
        <>
            <Meta title="Login" />
            <MainContainer>
                <CompanyLogoContainer>
                    <CompanyLogo src={companyLogo} alt="Company logo" />
                </CompanyLogoContainer>
                <StyledDescriptionWrapper>
                    <StyledText>Оновіть свій пароль</StyledText>
                </StyledDescriptionWrapper>
                <AuthWrapper>
                    <NewPasswordForm />
                </AuthWrapper>
                <ForgetPasswordWrapper>
                    <StyledLink onClick={() => navigate("/login")}>
                        Повернутись до авторізациї
                    </StyledLink>
                </ForgetPasswordWrapper>
            </MainContainer>
        </>
    );
};

export default NewPassword;

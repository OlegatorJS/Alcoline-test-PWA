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
} from "@/pages/Authorization/PasswordRecovery/Styled";
import companyLogo from "../../../assets/icons/trade_master.svg";
import EmailRecoveryForm from "@/pages/Authorization/PasswordRecovery/EmailRecoveryForm";
import { useNavigate } from "react-router-dom";

const PasswordRecovery = () => {
    const navigate = useNavigate();
    return (
        <>
            <Meta title="Login" />
            <MainContainer>
                <CompanyLogoContainer>
                    <CompanyLogo src={companyLogo} alt="Company logo" />
                </CompanyLogoContainer>
                <StyledDescriptionWrapper>
                    <StyledText>
                        Будь ласка, введіть вашу електронну пошту, на яку ми
                        відправимо код підтвердження для відновлення пароля.
                    </StyledText>
                </StyledDescriptionWrapper>
                <AuthWrapper>
                    <EmailRecoveryForm />
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

export default PasswordRecovery;

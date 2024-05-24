import Meta from "@/components/Meta";
import {
    AuthWrapper,
    CompanyLogo,
    CompanyLogoContainer,
    ForgetPasswordWrapper,
    MainContainer,
    StyledLink,
} from "@/pages/Authorization/Login/Styled";
import companyLogo from "../../../assets/icons/trade_master.svg";
import AuthForm from "@/pages/Authorization/Login/AuthForm";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    return (
        <>
            <Meta title="Login" />
            <MainContainer>
                <CompanyLogoContainer>
                    <CompanyLogo src={companyLogo} alt="Company logo" />
                </CompanyLogoContainer>
                <AuthWrapper>
                    <AuthForm />
                </AuthWrapper>
                <ForgetPasswordWrapper>
                    <StyledLink onClick={() => navigate("/password-recovery")}>
                        Забули пароль?
                        <br />
                        або
                        <br />
                        треба підтримка
                    </StyledLink>
                </ForgetPasswordWrapper>
            </MainContainer>
        </>
    );
}

export default Login;

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
import NewPasswordForm from "./ChangePasswordForm";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
    const navigate = useNavigate();
    return (
        <>
            <Meta title="Change Password" />
            <MainContainer>
                <AuthWrapper>
                    <NewPasswordForm />
                </AuthWrapper>
                <ForgetPasswordWrapper>
                    <StyledLink onClick={() => navigate("/profile/account")}>
                        Повернутись до профілю
                    </StyledLink>
                </ForgetPasswordWrapper>
            </MainContainer>
        </>
    );
};

export default ChangePassword;

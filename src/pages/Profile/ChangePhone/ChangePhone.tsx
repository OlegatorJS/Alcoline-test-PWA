import Meta from "@/components/Meta";
import {
    AuthWrapper,
    ForgetPasswordWrapper,
    MainContainer,
    StyledLink,
} from "@/pages/Profile/ChangePhone/Styled";
import EmailRecoveryForm from "@/pages/Profile/ChangePhone/ChangePhoneForm";
import { useNavigate } from "react-router-dom";

const ChangePhone = () => {
    const navigate = useNavigate();
    return (
        <>
            <Meta title="Change Phone" />
            <MainContainer>
                <AuthWrapper>
                    <EmailRecoveryForm />
                </AuthWrapper>
                <ForgetPasswordWrapper>
                    <StyledLink onClick={() => navigate("/profile")}>
                        Повернутись до профілю
                    </StyledLink>
                </ForgetPasswordWrapper>
            </MainContainer>
        </>
    );
};

export default ChangePhone;

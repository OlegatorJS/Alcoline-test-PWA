import Meta from "@/components/Meta";
import {
    ButtonsWrapper,
    DutyText,
    DutyTitle,
    DutyTotalWrapper,
    DutyValue,
    DutyWrapper,
    MainContainer,
    StyledButton,
} from "@/pages/WorkPlan/Duty/Styled";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import FlexContainer from "@/shared/elements/FlexContainer";
import { Button, Checkbox, InputNumber } from "antd";

const Duty = () => {
    const navigate = useNavigate();
    return (
        <>
            <Meta title="PrioritySale" />
            <Header title="Борг" path="/work-plan" />
            <MainContainer>
                <DutyWrapper>
                    <DutyTitle>Борг магазину:</DutyTitle>
                    <DutyValue>1000 грн.</DutyValue>
                </DutyWrapper>
                <DutyTotalWrapper>
                    <DutyText>
                        Введіть суму грошей, яку бажаєте забрати
                    </DutyText>
                    <InputNumber placeholder="0000.0" />
                    <FlexContainer gap="12px">
                        <Checkbox />
                        <DutyText>Забрати весь борг</DutyText>
                    </FlexContainer>
                </DutyTotalWrapper>
                <ButtonsWrapper>
                    <StyledButton>Вивести кошти</StyledButton>
                    <Button type="text">Не брати кошти</Button>
                </ButtonsWrapper>
            </MainContainer>
        </>
    );
};

export default Duty;

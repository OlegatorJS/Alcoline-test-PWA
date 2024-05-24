import React from "react";
import { FormProps, theme } from "antd";
import { Form } from "antd";
import {
    StyledButton,
    PasswordValidationWrapper,
    StyledText,
} from "@/pages/Authorization/NewPassword/NewPasswordForm/Styled";
import FlexContainer from "@/shared/elements/FlexContainer";
import { StyledPassword } from "@/pages/Authorization/Login/AuthForm/Styled";
import { CheckCircleOutlined } from "@ant-design/icons";
type FieldType = {
    newPassword?: string;
    newPasswordCopy?: string;
};

function NewPasswordForm() {
    const { useToken } = theme;
    const { token } = useToken();
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
        errorInfo,
    ) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <Form
                name="login"
                style={{
                    width: "100%",
                    padding: "0 16px",
                }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    name="newPassword"
                    label="Новий пароль"
                    style={{
                        marginBottom: "8px",
                    }}
                    rules={[
                        {
                            min: 8,
                            message: "Недостатня довжина паролю",
                        },
                    ]}
                >
                    <StyledPassword placeholder="Пароль" />
                </Form.Item>
                <PasswordValidationWrapper>
                    <FlexContainer
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        gap="8px"
                    >
                        <StyledText>Ваш пароль має містити</StyledText>
                        <FlexContainer gap="12px">
                            <CheckCircleOutlined />
                            <StyledText>Мінімум 8 символів</StyledText>
                        </FlexContainer>
                        <FlexContainer gap="12px">
                            <CheckCircleOutlined />
                            <StyledText>Мінімум 1 літеру</StyledText>
                        </FlexContainer>
                        <FlexContainer gap="12px">
                            <CheckCircleOutlined />
                            <StyledText>Мінімум 1 цифру</StyledText>
                        </FlexContainer>
                    </FlexContainer>
                </PasswordValidationWrapper>
                <Form.Item<FieldType>
                    name="newPasswordCopy"
                    rules={[
                        {
                            required: true,
                            message: "Будь ласка введіть пароль",
                        },
                        {
                            min: 8,
                            message: "Недостатня довжина паролю",
                        },
                    ]}
                >
                    <StyledPassword placeholder="Підтвердити пароль" />
                </Form.Item>
                <FlexContainer>
                    <StyledButton type="primary" htmlType="submit">
                        Зберігти
                    </StyledButton>
                </FlexContainer>
            </Form>
        </>
    );
}

export default NewPasswordForm;

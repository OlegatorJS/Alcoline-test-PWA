import React, { useState } from "react";
import type { FormProps } from "antd";
import { Form, Modal } from "antd";
import {
    StyledButton,
    StyledInput,
    StyledTitle,
    StyledText,
} from "@/pages/Authorization/PasswordRecovery/EmailRecoveryForm/Styled";
import FlexContainer from "@/shared/elements/FlexContainer";

type FieldType = {
    username?: string;
};

function ChangePhoneForm() {
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
        errorInfo,
    ) => {
        console.log("Failed:", errorInfo);
    };

    const handleSend = () => {
        setIsModalOpened(true);
    };

    const handleCancel = () => {
        setIsModalOpened(false);
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
                    name="username"
                    label="Номер телефону"
                    style={{ marginBottom: "16px" }}
                >
                    <StyledInput placeholder="Телефон" />
                </Form.Item>
                <FlexContainer>
                    <StyledButton
                        type="primary"
                        htmlType="submit"
                        onClick={handleSend}
                    >
                        Відправити
                    </StyledButton>
                </FlexContainer>
            </Form>
        </>
    );
}

export default ChangePhoneForm;

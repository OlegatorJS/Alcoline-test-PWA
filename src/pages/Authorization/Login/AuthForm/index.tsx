import React from "react";
import type { FormProps } from "antd";
import { Button, Form } from "antd";
import {
    StyledButton,
    StyledInput,
    StyledPassword,
} from "@/pages/Authorization/Login/AuthForm/Styled";
import FlexContainer from "@/shared/elements/FlexContainer";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks/redux";
import { login } from "@/store/ActionCreators";

type FieldType = {
    username?: string;
    password?: string;
};

function AuthForm() {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
        errorInfo,
    ) => {
        console.log("Failed:", errorInfo);
    };

    const loginHandler = async () => {
        form.validateFields().then(async (values) => {
            await dispatch(login(values));
            navigate("/");
        });
    };

    return (
        <Form
            name="login"
            form={form}
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
                rules={[
                    { required: true, message: "Будь ласка введіть email" },
                ]}
                style={{ marginBottom: "8px" }}
            >
                <StyledInput placeholder="Email" />
            </Form.Item>

            <Form.Item<FieldType>
                name="password"
                rules={[
                    { required: true, message: "Будь ласка введіть пароль" },
                ]}
            >
                <StyledPassword placeholder="Пароль" />
            </Form.Item>
            <FlexContainer>
                <StyledButton
                    type="primary"
                    htmlType="submit"
                    onClick={loginHandler}
                >
                    Увійти
                </StyledButton>
            </FlexContainer>
        </Form>
    );
}

export default AuthForm;

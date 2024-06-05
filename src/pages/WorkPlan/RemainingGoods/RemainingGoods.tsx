import Meta from "@/components/Meta";
import {
    ButtonsCheckboxWrapper,
    ButtonsWrapper,
    DutyTitle,
    GoodsItem,
    GoodsText,
    GoodsWrapper,
    MainContainer,
    NumberWrapper,
    StyledDecrement,
    StyledIncrement,
    StyledSearch,
} from "@/pages/WorkPlan/RemainingGoods/Styled";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button, Checkbox, InputNumber, Form } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useEffect } from "react";

const RemainingGoods = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue({
            ["value-1"]: 1,
            ["value-2"]: 2,
            ["value-3"]: 3,
            ["value-4"]: 4,
            ["value-5"]: 5,
        });
    });
    return (
        <>
            <Meta title="Remaining Goods" />
            <Header title="Залишки товарів" path="/work-plan" />
            <Form form={form} layout="vertical" autoComplete="off">
                <MainContainer>
                    <StyledSearch
                        placeholder="Шукати по SKU"
                        allowClear
                        size="large"
                        style={{ height: "50px" }}
                    />
                    <GoodsWrapper>
                        <GoodsItem>
                            <GoodsText>
                                Ігристе вино 1821 Vintage Bolgrad Шампанське
                                України, біле, напівсолодке
                            </GoodsText>
                            <NumberWrapper>
                                <StyledDecrement
                                    onClick={() => {
                                        form.getFieldValue("value-1") > 0 &&
                                            form.setFieldValue(
                                                "value-1",
                                                form.getFieldValue("value-1") -
                                                    1,
                                            );
                                    }}
                                >
                                    -
                                </StyledDecrement>
                                <Form.Item name="value-1">
                                    <InputNumber
                                        size="large"
                                        min={0}
                                        max={100000}
                                        style={{
                                            borderRadius: 0,
                                            width: "65px",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    />
                                </Form.Item>
                                <StyledIncrement
                                    onClick={() =>
                                        form.getFieldValue("value-1") > 0 &&
                                        form.setFieldValue(
                                            "value-1",
                                            form.getFieldValue("value-1") + 1,
                                        )
                                    }
                                >
                                    +
                                </StyledIncrement>
                            </NumberWrapper>
                        </GoodsItem>
                        <GoodsItem>
                            <GoodsText>
                                Ігристе вино 1821 Vintage Bolgrad Шампанське
                                України, біле, напівсолодке
                            </GoodsText>
                            <NumberWrapper>
                                <StyledDecrement
                                    onClick={() =>
                                        form.getFieldValue("value-2") > 0 &&
                                        form.setFieldValue(
                                            "value-2",
                                            form.getFieldValue("value-2") - 1,
                                        )
                                    }
                                >
                                    -
                                </StyledDecrement>
                                <Form.Item name="value-2">
                                    <InputNumber
                                        size="large"
                                        min={0}
                                        max={100000}
                                        style={{
                                            borderRadius: 0,
                                            width: "65px",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    />
                                </Form.Item>
                                <StyledIncrement
                                    onClick={() =>
                                        form.getFieldValue("value-2") > 0 &&
                                        form.setFieldValue(
                                            "value-2",
                                            form.getFieldValue("value-2") + 1,
                                        )
                                    }
                                >
                                    +
                                </StyledIncrement>
                            </NumberWrapper>
                        </GoodsItem>
                        <GoodsItem>
                            <GoodsText>
                                Ігристе вино 1821 Vintage Bolgrad Шампанське
                                України, біле, напівсолодке
                            </GoodsText>
                            <NumberWrapper>
                                <StyledDecrement
                                    onClick={() =>
                                        form.getFieldValue("value-3") > 0 &&
                                        form.setFieldValue(
                                            "value-3",
                                            form.getFieldValue("value-3") - 1,
                                        )
                                    }
                                >
                                    -
                                </StyledDecrement>
                                <Form.Item name="value-3">
                                    <InputNumber
                                        size="large"
                                        min={0}
                                        max={100000}
                                        style={{
                                            borderRadius: 0,
                                            width: "65px",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    />
                                </Form.Item>
                                <StyledIncrement
                                    onClick={() =>
                                        form.getFieldValue("value-3") > 0 &&
                                        form.setFieldValue(
                                            "value-3",
                                            form.getFieldValue("value-3") + 1,
                                        )
                                    }
                                >
                                    +
                                </StyledIncrement>
                            </NumberWrapper>
                        </GoodsItem>
                        <GoodsItem>
                            <GoodsText>
                                Ігристе вино 1821 Vintage Bolgrad Шампанське
                                України, біле, напівсолодке
                            </GoodsText>
                            <NumberWrapper>
                                <StyledDecrement
                                    onClick={() =>
                                        form.getFieldValue("value-4") > 0 &&
                                        form.setFieldValue(
                                            "value-4",
                                            form.getFieldValue("value-4") - 1,
                                        )
                                    }
                                >
                                    -
                                </StyledDecrement>
                                <Form.Item name="value-4">
                                    <InputNumber
                                        size="large"
                                        min={0}
                                        max={100000}
                                        style={{
                                            borderRadius: 0,
                                            width: "65px",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    />
                                </Form.Item>
                                <StyledIncrement
                                    onClick={() =>
                                        form.getFieldValue("value-4") > 0 &&
                                        form.setFieldValue(
                                            "value-4",
                                            form.getFieldValue("value-4") + 1,
                                        )
                                    }
                                >
                                    +
                                </StyledIncrement>
                            </NumberWrapper>
                        </GoodsItem>
                        <GoodsItem>
                            <GoodsText>
                                Ігристе вино 1821 Vintage Bolgrad Шампанське
                                України, біле, напівсолодке
                            </GoodsText>
                            <NumberWrapper>
                                <StyledDecrement
                                    onClick={() =>
                                        form.getFieldValue("value-5") > 0 &&
                                        form.setFieldValue(
                                            "value-5",
                                            form.getFieldValue("value-5") - 1,
                                        )
                                    }
                                >
                                    -
                                </StyledDecrement>
                                <Form.Item name="value-5">
                                    <InputNumber
                                        size="large"
                                        min={0}
                                        max={100000}
                                        style={{
                                            borderRadius: 0,
                                            width: "65px",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    />
                                </Form.Item>
                                <StyledIncrement
                                    onClick={() =>
                                        form.getFieldValue("value-5") > 0 &&
                                        form.setFieldValue(
                                            "value-5",
                                            form.getFieldValue("value-5") + 1,
                                        )
                                    }
                                >
                                    +
                                </StyledIncrement>
                            </NumberWrapper>
                        </GoodsItem>
                    </GoodsWrapper>
                    <ButtonsWrapper>
                        <ButtonsCheckboxWrapper>
                            <DutyTitle>Цінники</DutyTitle>
                            <Checkbox />
                        </ButtonsCheckboxWrapper>
                        <Button
                            type="primary"
                            icon={<DownloadOutlined />}
                            style={{ height: "50px", width: "100%" }}
                        >
                            Завантажити фото
                        </Button>
                    </ButtonsWrapper>
                </MainContainer>
            </Form>
        </>
    );
};

export default RemainingGoods;

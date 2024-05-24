import Meta from "@/components/Meta";
import {
    ButtonsCheckboxWrapper,
    ButtonsWrapper,
    DutyTitle,
    GoodsItem,
    GoodsText,
    GoodsWrapper,
    MainContainer, NumberWrapper,
    StyledDecrement,
    StyledIncrement,
    StyledNumberController,
    StyledSearch,
} from "@/pages/WorkPlan/RemainingGoods/Styled";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button, Checkbox, InputNumber } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const RemainingGoods = () => {
    const navigate = useNavigate();
    return (
        <>
            <Meta title="Remaining Goods" />
            <Header title="Залишки товарів" path="/work-plan" />
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
                            <StyledDecrement>-</StyledDecrement>
                            <InputNumber
                                size="large"
                                min={1}
                                max={100000}
                                defaultValue={3}
                                style={{
                                    borderRadius: 0,
                                    width: "65px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            />
                            <StyledIncrement>+</StyledIncrement>
                        </NumberWrapper>
                    </GoodsItem>
                    <GoodsItem>
                        <GoodsText>
                            Ігристе вино 1821 Vintage Bolgrad Шампанське
                            України, біле, напівсолодке
                        </GoodsText>
                        <NumberWrapper>
                            <StyledDecrement>-</StyledDecrement>
                            <InputNumber
                                size="large"
                                min={1}
                                max={100000}
                                defaultValue={3}
                                style={{
                                    borderRadius: 0,
                                    width: "65px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            />
                            <StyledIncrement>+</StyledIncrement>
                        </NumberWrapper>
                    </GoodsItem>
                    <GoodsItem>
                        <GoodsText>
                            Ігристе вино 1821 Vintage Bolgrad Шампанське
                            України, біле, напівсолодке
                        </GoodsText>
                        <NumberWrapper>
                            <StyledDecrement>-</StyledDecrement>
                            <InputNumber
                                size="large"
                                min={1}
                                max={100000}
                                defaultValue={3}
                                style={{
                                    borderRadius: 0,
                                    width: "65px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            />
                            <StyledIncrement>+</StyledIncrement>
                        </NumberWrapper>
                    </GoodsItem>
                    <GoodsItem>
                        <GoodsText>
                            Ігристе вино 1821 Vintage Bolgrad Шампанське
                            України, біле, напівсолодке
                        </GoodsText>
                        <NumberWrapper>
                            <StyledDecrement>-</StyledDecrement>
                            <InputNumber
                                size="large"
                                min={1}
                                max={100000}
                                defaultValue={3}
                                style={{
                                    borderRadius: 0,
                                    width: "65px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            />
                            <StyledIncrement>+</StyledIncrement>
                        </NumberWrapper>
                    </GoodsItem>
                    <GoodsItem>
                        <GoodsText>
                            Ігристе вино 1821 Vintage Bolgrad Шампанське
                            України, біле, напівсолодке
                        </GoodsText>
                        <NumberWrapper>
                            <StyledDecrement>-</StyledDecrement>
                            <InputNumber
                                size="large"
                                min={1}
                                max={100000}
                                defaultValue={3}
                                style={{
                                    borderRadius: 0,
                                    width: "65px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            />
                            <StyledIncrement>+</StyledIncrement>
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
        </>
    );
};

export default RemainingGoods;

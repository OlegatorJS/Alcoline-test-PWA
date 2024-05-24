import Meta from "@/components/Meta";
import {
    ButtonsWrapper,
    GoodsItem,
    MainContainer,
    StyledFormTitle,
    StyledSearch,
    StyledTitle,
    StyledTypography,
    SaleText,
    CollapseItem,
    CollapseWrapper,
    StyledCollapse,
} from "@/pages/WorkPlan/Upsells/Styled";
import Header from "@/components/Header";
import { Button, CollapseProps, Divider, InputNumber } from "antd";
import FlexContainer from "@/shared/elements/FlexContainer";
import React from "react";

const items: CollapseProps["items"] = [
    {
        key: "1",
        label: (
            <FlexContainer justifyContent="space-between">
                <StyledFormTitle>Вино</StyledFormTitle>
                <StyledFormTitle>1 000</StyledFormTitle>
            </FlexContainer>
        ),
        children: (
            <CollapseWrapper>
                <CollapseItem>
                    <GoodsItem>
                        <FlexContainer justifyContent="space-between">
                            <StyledTitle>
                                Bolgrad Granato Rosso червн. н/c 0,75l kod:
                                11110020
                            </StyledTitle>
                            <StyledTypography>1 000₴</StyledTypography>
                        </FlexContainer>
                        <FlexContainer justifyContent="space-between">
                            <FlexContainer
                                flexDirection="column"
                                alignItems="flex-start"
                            >
                                <FlexContainer gap="4px">
                                    <SaleText>Рекомендовано:</SaleText>
                                    <SaleText bold>87</SaleText>
                                </FlexContainer>
                                <FlexContainer gap="4px">
                                    <SaleText>Залишок:</SaleText>
                                    <SaleText bold>1983</SaleText>
                                </FlexContainer>
                            </FlexContainer>
                            <FlexContainer gap="8px">
                                <InputNumber
                                    size="large"
                                    min={1}
                                    max={100000}
                                    controls
                                    defaultValue={3}
                                />
                                <InputNumber
                                    size="large"
                                    min={1}
                                    max={100000}
                                    controls
                                    defaultValue={3}
                                />
                            </FlexContainer>
                        </FlexContainer>
                    </GoodsItem>
                </CollapseItem>
                <Divider />
                <CollapseItem>
                    <GoodsItem>
                        <FlexContainer justifyContent="space-between">
                            <StyledTitle>
                                Bolgrad Granato Rosso червн. н/c 0,75l kod:
                                11110020
                            </StyledTitle>
                            <StyledTypography>1 000₴</StyledTypography>
                        </FlexContainer>
                        <FlexContainer justifyContent="space-between">
                            <FlexContainer
                                flexDirection="column"
                                alignItems="flex-start"
                            >
                                <FlexContainer gap="4px">
                                    <SaleText>Рекомендовано:</SaleText>
                                    <SaleText bold>87</SaleText>
                                </FlexContainer>
                                <FlexContainer gap="4px">
                                    <SaleText>Залишок:</SaleText>
                                    <SaleText bold>1983</SaleText>
                                </FlexContainer>
                            </FlexContainer>
                            <FlexContainer gap="8px">
                                <InputNumber
                                    size="large"
                                    min={1}
                                    max={100000}
                                    controls
                                    defaultValue={3}
                                />
                                <InputNumber
                                    size="large"
                                    min={1}
                                    max={100000}
                                    controls
                                    defaultValue={3}
                                />
                            </FlexContainer>
                        </FlexContainer>
                    </GoodsItem>
                </CollapseItem>
                <Divider />
                <CollapseItem>
                    <GoodsItem>
                        <FlexContainer justifyContent="space-between">
                            <StyledTitle>
                                Bolgrad Granato Rosso червн. н/c 0,75l kod:
                                11110020
                            </StyledTitle>
                            <StyledTypography>1 000₴</StyledTypography>
                        </FlexContainer>
                        <FlexContainer justifyContent="space-between">
                            <FlexContainer
                                flexDirection="column"
                                alignItems="flex-start"
                            >
                                <FlexContainer gap="4px">
                                    <SaleText>Рекомендовано:</SaleText>
                                    <SaleText bold>87</SaleText>
                                </FlexContainer>
                                <FlexContainer gap="4px">
                                    <SaleText>Залишок:</SaleText>
                                    <SaleText bold>1983</SaleText>
                                </FlexContainer>
                            </FlexContainer>
                            <FlexContainer gap="8px">
                                <InputNumber
                                    size="large"
                                    min={1}
                                    max={100000}
                                    controls
                                    defaultValue={3}
                                />
                                <InputNumber
                                    size="large"
                                    min={1}
                                    max={100000}
                                    controls
                                    defaultValue={3}
                                />
                            </FlexContainer>
                        </FlexContainer>
                    </GoodsItem>
                </CollapseItem>
            </CollapseWrapper>
        ),
    },
    {
        key: "2",
        label: (
            <FlexContainer justifyContent="space-between">
                <StyledFormTitle>Водка</StyledFormTitle>
                <StyledFormTitle>1 400</StyledFormTitle>
            </FlexContainer>
        ),
        children: (
            <CollapseWrapper>
                <CollapseItem>
                    <GoodsItem>
                        <FlexContainer justifyContent="space-between">
                            <StyledTitle>
                                Bolgrad Granato Rosso червн. н/c 0,75l kod:
                                11110020
                            </StyledTitle>
                            <StyledTypography>1 000₴</StyledTypography>
                        </FlexContainer>
                        <FlexContainer justifyContent="space-between">
                            <FlexContainer
                                flexDirection="column"
                                alignItems="flex-start"
                            >
                                <FlexContainer gap="4px">
                                    <SaleText>Рекомендовано:</SaleText>
                                    <SaleText bold>87</SaleText>
                                </FlexContainer>
                                <FlexContainer gap="4px">
                                    <SaleText>Залишок:</SaleText>
                                    <SaleText bold>1983</SaleText>
                                </FlexContainer>
                            </FlexContainer>
                            <FlexContainer gap="8px">
                                <InputNumber
                                    size="large"
                                    min={1}
                                    max={100000}
                                    controls
                                    defaultValue={3}
                                />
                                <InputNumber
                                    size="large"
                                    min={1}
                                    max={100000}
                                    controls
                                    defaultValue={3}
                                />
                            </FlexContainer>
                        </FlexContainer>
                    </GoodsItem>
                </CollapseItem>
            </CollapseWrapper>
        ),
    },
    {
        key: "3",
        label: (
            <FlexContainer justifyContent="space-between">
                <StyledFormTitle>Бренді</StyledFormTitle>
                <StyledFormTitle>2 100</StyledFormTitle>
            </FlexContainer>
        ),
        children: (
            <CollapseWrapper>
                <CollapseItem>
                    <GoodsItem>
                        <FlexContainer justifyContent="space-between">
                            <StyledTitle>
                                Bolgrad Granato Rosso червн. н/c 0,75l kod:
                                11110020
                            </StyledTitle>
                            <StyledTypography>1 000₴</StyledTypography>
                        </FlexContainer>
                        <FlexContainer justifyContent="space-between">
                            <FlexContainer
                                flexDirection="column"
                                alignItems="flex-start"
                            >
                                <FlexContainer gap="4px">
                                    <SaleText>Рекомендовано:</SaleText>
                                    <SaleText bold>87</SaleText>
                                </FlexContainer>
                                <FlexContainer gap="4px">
                                    <SaleText>Залишок:</SaleText>
                                    <SaleText bold>1983</SaleText>
                                </FlexContainer>
                            </FlexContainer>
                            <FlexContainer gap="8px">
                                <InputNumber
                                    size="large"
                                    min={1}
                                    max={100000}
                                    controls
                                    defaultValue={3}
                                />
                                <InputNumber
                                    size="large"
                                    min={1}
                                    max={100000}
                                    controls
                                    defaultValue={3}
                                />
                            </FlexContainer>
                        </FlexContainer>
                    </GoodsItem>
                </CollapseItem>
            </CollapseWrapper>
        ),
    },
];

const Upsells = () => {
    return (
        <>
            <Meta title="Upsells" />
            <Header title="Додатковий продаж" path="/work-plan" />
            <MainContainer>
                <FlexContainer justifyContent="space-between">
                    <StyledSearch
                        placeholder="Шукати"
                        allowClear
                        size="large"
                        style={{ height: "50px", width: "50%" }}
                    />
                    <FlexContainer gap="16px">
                        <StyledFormTitle>Form 1</StyledFormTitle>
                        <StyledFormTitle>Form 2</StyledFormTitle>
                    </FlexContainer>
                </FlexContainer>
                <StyledCollapse
                    defaultActiveKey={["1"]}
                    expandIconPosition="end"
                    items={items}
                />
                <ButtonsWrapper>
                    <Button
                        type="primary"
                        style={{ height: "50px", width: "100%" }}
                    >
                        Checkout
                    </Button>
                </ButtonsWrapper>
            </MainContainer>
        </>
    );
};

export default Upsells;

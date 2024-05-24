import Meta from "@/components/Meta";
import Header from "@/components/Header";

import {
    MainContainer,
    TaskDescriptionBlock,
    TaskDescriptionText,
    ImageWrapper,
    TaskTitle,
    StyledText,
    DocumentItem,
} from "@/pages/WorkPlan/ProductCard/Styled";
import { Image, Carousel } from "antd";
import React from "react";
import FlexContainer from "@/shared/elements/FlexContainer";

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

function ProductCard() {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };
    return (
        <>
            <Meta title="Profile" />
            <Header
                title="Bolgrad Granato Rosso червн. н/c 0,75l kod: 11110020"
                path="/work-plan"
            />
            <MainContainer>
                <ImageWrapper>
                    <Carousel afterChange={onChange}>
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
                </ImageWrapper>
                <StyledText>Код: 749265031</StyledText>
                <TaskDescriptionBlock>
                    <DocumentItem>
                        <FlexContainer justifyContent="space-between">
                            <TaskDescriptionText>Ціна</TaskDescriptionText>
                            <TaskDescriptionText>190,00грн</TaskDescriptionText>
                        </FlexContainer>
                    </DocumentItem>
                    <DocumentItem>
                        <FlexContainer justifyContent="space-between">
                            <TaskDescriptionText>Бренд</TaskDescriptionText>
                            <TaskDescriptionText>Bolgrad</TaskDescriptionText>
                        </FlexContainer>
                    </DocumentItem>
                    <DocumentItem>
                        <FlexContainer justifyContent="space-between">
                            <TaskDescriptionText>Фасовка</TaskDescriptionText>
                            <TaskDescriptionText>0,75 л</TaskDescriptionText>
                        </FlexContainer>
                    </DocumentItem>
                    <DocumentItem>
                        <FlexContainer justifyContent="space-between">
                            <TaskDescriptionText>Країна</TaskDescriptionText>
                            <TaskDescriptionText>Україна</TaskDescriptionText>
                        </FlexContainer>
                    </DocumentItem>
                    <DocumentItem>
                        <FlexContainer justifyContent="space-between">
                            <TaskDescriptionText>
                                Міцність алкоголю
                            </TaskDescriptionText>
                            <TaskDescriptionText>12,5%</TaskDescriptionText>
                        </FlexContainer>
                    </DocumentItem>
                    <DocumentItem>
                        <FlexContainer justifyContent="space-between">
                            <TaskDescriptionText>
                                Сорт винограду
                            </TaskDescriptionText>
                            <TaskDescriptionText>Купаж</TaskDescriptionText>
                        </FlexContainer>
                    </DocumentItem>
                    <DocumentItem>
                        <FlexContainer justifyContent="space-between">
                            <TaskDescriptionText>Вид</TaskDescriptionText>
                            <TaskDescriptionText>Тенессі</TaskDescriptionText>
                        </FlexContainer>
                    </DocumentItem>
                    <DocumentItem>
                        <FlexContainer justifyContent="space-between">
                            <TaskDescriptionText>
                                Класифікація
                            </TaskDescriptionText>
                            <TaskDescriptionText>
                                Невінтажне
                            </TaskDescriptionText>
                        </FlexContainer>
                    </DocumentItem>
                    <DocumentItem>
                        <FlexContainer justifyContent="space-between">
                            <TaskDescriptionText>
                                Колір вина
                            </TaskDescriptionText>
                            <TaskDescriptionText>Біле</TaskDescriptionText>
                        </FlexContainer>
                    </DocumentItem>
                </TaskDescriptionBlock>
            </MainContainer>
        </>
    );
}

export default ProductCard;

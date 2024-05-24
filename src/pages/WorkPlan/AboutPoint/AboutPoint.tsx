import Meta from "@/components/Meta";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button, CollapseProps, Modal, RadioChangeEvent } from "antd";

import {
    MainContainer,
    TaskDescriptionHeader,
    TaskDescriptionTitle,
    TaskDescriptionBlock,
    TaskDescriptionText,
    ImageWrapper,
    TaskTitle,
    DocumentItem,
    StyledTitle,
    StyledText,
} from "@/pages/WorkPlan/AboutPoint/Styled";
import { Image, Radio, Table } from "antd";
import React, { useMemo, useState } from "react";
import {
    CollapseItem,
    CollapseWrapper,
    StyledCollapse,
    StyledDivider,
} from "@/pages/Dashboard/Styled";

const dataSource = [
    {
        key: "1",
        name: "Ігристе вино 1821 Vintage Bolgrad Шампанське України, біле, напівсолодке",
        quantity: 8,
        price: 1000,
        total: 8000,
    },
    {
        key: "2",
        name: "Ігристе вино 1821 Vintage Bolgrad Шампанське України, біле, напівсолодке",
        quantity: 8,
        price: 1000,
        total: 8000,
    },
];

const columns = [
    {
        title: "Назва",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Кількість",
        dataIndex: "quantity",
        key: "quantity",
    },
    {
        title: "Ціна",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "Сума",
        dataIndex: "total",
        key: "total",
    },
];

function AboutPoint() {
    const navigate = useNavigate();
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const [type, setType] = useState<string>("1");

    const onChange = (e: RadioChangeEvent) => {
        setType(e.target.value);
    };

    const handleCancel = () => {
        setIsModalOpened(false);
    };

    const items: CollapseProps["items"] = [
        {
            key: "1",
            label: "20.04.24",
            children: (
                <CollapseWrapper>
                    <CollapseItem>
                        <Table dataSource={dataSource} columns={columns} />
                    </CollapseItem>
                    <StyledDivider />
                </CollapseWrapper>
            ),
        },
        {
            key: "2",
            label: "22.05.24",
            children: (
                <CollapseWrapper>
                    <CollapseItem>
                        <Table dataSource={dataSource} columns={columns} />
                    </CollapseItem>
                    <StyledDivider />
                </CollapseWrapper>
            ),
        },
    ];

    const renderTabs = useMemo(() => {
        switch (type) {
            case "1":
                return (
                    <TaskDescriptionBlock>
                        <TaskTitle>Назва</TaskTitle>
                        <TaskTitle>Адреса</TaskTitle>
                        <TaskDescriptionText>
                            Phasellus euismod nunc et est venenatis bibendum.
                            Sed elementum, quam at dictum pulvinar, risus ipsum
                            mollis mi, sollicitudin porttitor velit quam quis
                            orci. Maecenas interdum, nunc in tempus tincidunt,
                            lectus lorem facilisis magna, at ultrices nibh ipsum
                            vel tortor. Praesent venenatis lacinia diam, nec
                            imperdiet ante iaculis id. Duis porttitor, eros id
                            cursus hendrerit, mauris magna lacinia dui, quis
                            suscipit libero sapien quis tortor. Sed vehicula eu
                            lectus at congue. Suspendisse fringilla, nulla eu
                            condimentum consequat, orci eros facilisis orci,
                            eget ultrices enim diam.
                        </TaskDescriptionText>
                    </TaskDescriptionBlock>
                );
            case "2":
                return (
                    <>
                        <TaskTitle>Історія продажів</TaskTitle>
                        <StyledCollapse
                            defaultActiveKey={["1"]}
                            expandIconPosition="end"
                            items={items}
                        />
                    </>
                );
            case "3":
                return (
                    <TaskDescriptionBlock>
                        <TaskTitle>Документообіг</TaskTitle>
                        <DocumentItem>
                            <TaskDescriptionText
                                onClick={() => setIsModalOpened(true)}
                            >
                                Документ 1
                            </TaskDescriptionText>
                        </DocumentItem>
                        <DocumentItem>
                            <TaskDescriptionText
                                onClick={() => setIsModalOpened(true)}
                            >
                                Документ 2
                            </TaskDescriptionText>
                        </DocumentItem>
                        <DocumentItem>
                            <TaskDescriptionText
                                onClick={() => setIsModalOpened(true)}
                            >
                                Документ 3
                            </TaskDescriptionText>
                        </DocumentItem>
                        <DocumentItem>
                            <TaskDescriptionText
                                onClick={() => setIsModalOpened(true)}
                            >
                                Документ 4
                            </TaskDescriptionText>
                        </DocumentItem>
                    </TaskDescriptionBlock>
                );
        }
    }, [type]);
    return (
        <>
            <Meta title="Profile" />
            <Header title="Про товарну точку" path="/work-plan" />
            <MainContainer>
                <TaskDescriptionHeader>
                    <TaskDescriptionTitle>Назва</TaskDescriptionTitle>
                </TaskDescriptionHeader>
                <ImageWrapper>
                    <Image
                        width="100%"
                        height="100%"
                        src="https://polsha24.com/media/News/1_ebt3HlG.jfif"
                        fallback="data:image/png;base64,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"
                    />
                </ImageWrapper>
                <Radio.Group
                    value={type}
                    onChange={onChange}
                    style={{ margin: "16px 0" }}
                >
                    <Radio.Button value="1">Інфо</Radio.Button>
                    <Radio.Button value="2">Історія</Radio.Button>
                    <Radio.Button value="3">Документи</Radio.Button>
                </Radio.Group>
                {renderTabs}
            </MainContainer>
            <Modal
                title=""
                open={isModalOpened}
                onOk={handleCancel}
                onCancel={handleCancel}
                centered
                width="90%"
                footer={[]}
            >
                <StyledTitle>Завантаження</StyledTitle>
                <StyledText>
                    Документ був завантажений на ваш пристрій
                </StyledText>
                <Button
                    style={{ width: "100%", height: "50px" }}
                    type="primary"
                    onClick={handleCancel}
                >
                    Oк
                </Button>
            </Modal>
        </>
    );
}

export default AboutPoint;

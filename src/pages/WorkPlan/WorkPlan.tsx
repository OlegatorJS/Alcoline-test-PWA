import Meta from "@/components/Meta";
import {
    MainContainer,
    UserInfo,
    StyledCollapse,
    CollapseWrapper,
    CollapseItem,
    StyledButton,
    PointStatusMarker,
    CollapseButtonWrapper,
    StyledTitle,
    StyledText,
    ButtonsWrapper,
    TaskDescriptionTextArea,
} from "@/pages/WorkPlan/Styled";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import FlexContainer from "@/shared/elements/FlexContainer";
import {
    CollapseProps,
    Typography,
    Button,
    Checkbox,
    Modal,
    Upload,
    UploadFile,
    Input,
} from "antd";
import dollarIcon from "../../assets/images/dollar.png";
import { EnvironmentFilled, PaperClipOutlined } from "@ant-design/icons";
import React, { SyntheticEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setWorkStatus } from "@/store/slices/UserSlice";

const fileList: UploadFile[] = [
    {
        uid: "0",
        name: "xxx.png",
        status: "uploading",
        percent: 33,
    },
];
const { TextArea } = Input;

function WorkPlan() {
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const { isWorkStarted } = useAppSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleCancel = () => {
        setIsModalOpened(false);
    };

    const handleOpenPoint = (e: SyntheticEvent) => {
        e.preventDefault();
        window.open(
            "https://www.google.com/maps/place/45%C2%B041'13.0%22N+28%C2%B037'17.1%22E/@45.6869353,28.6214161,17z/data=!3m1!4b1!4m4!3m3!8m2!3d45.6869353!4d28.6214161?entry=ttu",
        );
    };

    const items: CollapseProps["items"] = [
        {
            key: "1",
            label: (
                <FlexContainer justifyContent="space-between">
                    <FlexContainer gap="12px" justifyContent="flex-start">
                        <PointStatusMarker hasDuty={false} />
                        <Typography>вул. Михайла Грушевського, 39А</Typography>
                    </FlexContainer>
                    <EnvironmentFilled
                        style={{
                            color: "#1677FF",
                            height: "20px",
                            fontSize: "20px",
                        }}
                        onClick={handleOpenPoint}
                    />
                </FlexContainer>
            ),
            children: (
                <CollapseWrapper>
                    <CollapseButtonWrapper>
                        <img src={dollarIcon} alt="dollar icon" />
                        <Button
                            style={{ height: "32px", fontSize: "14px" }}
                            onClick={() => navigate("details/12345")}
                        >
                            Про товарну точку
                        </Button>
                        <Button
                            danger
                            style={{ height: "32px", fontSize: "14px" }}
                            onClick={() => setIsModalOpened(true)}
                        >
                            Пропустити
                        </Button>
                    </CollapseButtonWrapper>
                    <CollapseItem>
                        <FlexContainer
                            gap="12px"
                            onClick={() => navigate("duty/12345")}
                        >
                            <Checkbox />
                            <Typography>Борг</Typography>
                        </FlexContainer>
                        <FlexContainer
                            gap="12px"
                            onClick={() => navigate("task/12345")}
                        >
                            <Checkbox />
                            <Typography>Перевірити кількість</Typography>
                        </FlexContainer>
                        <FlexContainer
                            gap="12px"
                            onClick={() => navigate("remaining/12345")}
                        >
                            <Checkbox />
                            <Typography>Залишки товарів</Typography>
                        </FlexContainer>
                        <FlexContainer
                            gap="12px"
                            onClick={() => navigate("priority-sale/12345")}
                        >
                            <Checkbox />
                            <Typography>Пріорітетний продаж</Typography>
                        </FlexContainer>
                        <FlexContainer
                            gap="12px"
                            onClick={() => navigate("upsells/12345")}
                        >
                            <Checkbox />
                            <Typography>Додатковий продаж</Typography>
                        </FlexContainer>
                        <FlexContainer gap="12px">
                            <Checkbox />
                            <Typography>Перевірити кількість</Typography>
                        </FlexContainer>
                    </CollapseItem>
                </CollapseWrapper>
            ),
        },
        {
            key: "2",
            label: (
                <FlexContainer justifyContent="space-between">
                    <FlexContainer gap="12px" justifyContent="flex-start">
                        <PointStatusMarker hasDuty={false} />
                        <Typography>вул. Михайла Грушевського, 39А</Typography>
                    </FlexContainer>
                    <EnvironmentFilled
                        style={{
                            color: "#1677FF",
                            height: "20px",
                            fontSize: "20px",
                        }}
                        onClick={handleOpenPoint}
                    />
                </FlexContainer>
            ),
            children: (
                <CollapseWrapper>
                    <CollapseButtonWrapper>
                        <img src={dollarIcon} alt="dollar icon" />
                        <Button style={{ height: "32px", fontSize: "14px" }}>
                            Про товарну точку
                        </Button>
                        <Button style={{ height: "32px", fontSize: "14px" }}>
                            Пропустити
                        </Button>
                    </CollapseButtonWrapper>
                    <CollapseItem>
                        <FlexContainer gap="12px">
                            <Checkbox />
                            <Typography>Борг</Typography>
                        </FlexContainer>
                        <FlexContainer gap="12px">
                            <Checkbox />
                            <Typography>Перевірити кількість</Typography>
                        </FlexContainer>
                        <FlexContainer gap="12px">
                            <Checkbox />
                            <Typography>Перевірити кількість</Typography>
                        </FlexContainer>
                        <FlexContainer gap="12px">
                            <Checkbox />
                            <Typography>Перевірити кількість</Typography>
                        </FlexContainer>
                        <FlexContainer gap="12px">
                            <Checkbox />
                            <Typography>Перевірити кількість</Typography>
                        </FlexContainer>
                        <FlexContainer gap="12px">
                            <Checkbox />
                            <Typography>Перевірити кількість</Typography>
                        </FlexContainer>
                    </CollapseItem>
                </CollapseWrapper>
            ),
        },
        {
            key: "3",
            label: (
                <FlexContainer justifyContent="space-between">
                    <FlexContainer gap="12px" justifyContent="flex-start">
                        <PointStatusMarker hasDuty />
                        <Typography>вул. Михайла Грушевського, 39А</Typography>
                    </FlexContainer>
                    <EnvironmentFilled
                        style={{
                            color: "#1677FF",
                            height: "20px",
                            fontSize: "20px",
                        }}
                        onClick={handleOpenPoint}
                    />
                </FlexContainer>
            ),
            children: (
                <CollapseWrapper>
                    <CollapseButtonWrapper>
                        <img src={dollarIcon} alt="dollar icon" />
                        <Button style={{ height: "32px", fontSize: "14px" }}>
                            Про товарну точку
                        </Button>
                        <Button style={{ height: "32px", fontSize: "14px" }}>
                            Пропустити
                        </Button>
                    </CollapseButtonWrapper>
                    <CollapseItem>
                        <FlexContainer gap="12px">
                            <Checkbox />
                            <Typography>Борг</Typography>
                        </FlexContainer>
                        <FlexContainer gap="12px">
                            <Checkbox />
                            <Typography>Перевірити кількість</Typography>
                        </FlexContainer>
                        <FlexContainer gap="12px">
                            <Checkbox />
                            <Typography>Перевірити кількість</Typography>
                        </FlexContainer>
                        <FlexContainer gap="12px">
                            <Checkbox />
                            <Typography>Перевірити кількість</Typography>
                        </FlexContainer>
                        <FlexContainer gap="12px">
                            <Checkbox />
                            <Typography>Перевірити кількість</Typography>
                        </FlexContainer>
                        <FlexContainer gap="12px">
                            <Checkbox />
                            <Typography>Перевірити кількість</Typography>
                        </FlexContainer>
                    </CollapseItem>
                </CollapseWrapper>
            ),
        },
    ];

    return (
        <>
            <Meta title="Work Plan" />
            <Header title="На роботі" />
            <MainContainer>
                {isWorkStarted ? (
                    <>
                        <Button
                            style={{ height: "50px" }}
                            danger
                            onClick={() => dispatch(setWorkStatus(false))}
                        >
                            Завершити
                        </Button>
                        <UserInfo>
                            <StyledCollapse
                                defaultActiveKey={["1"]}
                                expandIconPosition="end"
                                items={items}
                            />
                        </UserInfo>
                    </>
                ) : (
                    <StyledButton onClick={() => dispatch(setWorkStatus(true))}>
                        Почати
                    </StyledButton>
                )}
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
                <StyledTitle>Пропустити?</StyledTitle>
                <StyledText>
                    Поясніть причину пропуску торгової точки
                </StyledText>
                <TaskDescriptionTextArea>
                    <TextArea rows={4} placeholder="Ваш коментар..." />
                    <Upload
                        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        listType="picture"
                        defaultFileList={[...fileList]}
                        className="upload-list-inline"
                    >
                        <PaperClipOutlined
                            style={{ height: "20px", fontSize: "20px" }}
                        />
                    </Upload>
                </TaskDescriptionTextArea>
                <ButtonsWrapper>
                    <StyledButton>Відправити</StyledButton>
                    <Button type="text">Назад</Button>
                </ButtonsWrapper>
            </Modal>
        </>
    );
}

export default WorkPlan;

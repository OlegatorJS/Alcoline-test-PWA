import Meta from "@/components/Meta";
import {
    MainContainer,
    TaskDescriptionHeader,
    TaskDescriptionTitle,
    TaskDescriptionBlock,
    TaskDescriptionText,
    DateText,
    TaskDescriptionTextArea,
} from "@/pages/WorkPlan/TaskDetails/Styled";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { ArrowUpOutlined, PaperClipOutlined } from "@ant-design/icons";
import { CollapseProps, Typography, UploadFile } from "antd";
import { Button, Upload, Input } from "antd";
import { CollapseItem, CollapseWrapper, StyledDivider, StyledScore, UserInfoTitle } from "@/pages/Dashboard/Styled";
import FlexContainer from "@/shared/elements/FlexContainer";

const { TextArea } = Input;

const fileList: UploadFile[] = [
    {
        uid: "0",
        name: "xxx.png",
        status: "uploading",
        percent: 33,
    },
    {
        uid: "-1",
        name: "yyy.png",
        status: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        thumbUrl:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
        uid: "-2",
        name: "zzz.png",
        status: "error",
    },
];

function TaskDetails() {
    const navigate = useNavigate();

    return (
        <>
            <Meta title="Task details" />
            <Header title="Завдання від Супервайзера" path="/work-plan" />
            <MainContainer>
                <TaskDescriptionHeader>
                    <DateText>18 квітня о 14:03</DateText>
                    <TaskDescriptionTitle>
                        Назва: Phasellus euismod nunc et est venenatis
                    </TaskDescriptionTitle>
                </TaskDescriptionHeader>
                <TaskDescriptionBlock>
                    <TaskDescriptionText>
                        Phasellus euismod nunc et est venenatis bibendum. Sed
                        elementum, quam at dictum pulvinar, risus ipsum mollis
                        mi, sollicitudin porttitor velit quam quis orci.
                        Maecenas interdum, nunc in tempus tincidunt, lectus
                        lorem facilisis magna, at ultrices nibh ipsum vel
                        tortor. Praesent venenatis lacinia diam, nec imperdiet
                        ante iaculis id. Duis porttitor, eros id cursus
                        hendrerit, mauris magna lacinia dui, quis suscipit
                        libero sapien quis tortor. Sed vehicula eu lectus at
                        congue. Suspendisse fringilla, nulla eu condimentum
                        consequat, orci eros facilisis orci, eget ultrices enim
                        diam.
                    </TaskDescriptionText>
                </TaskDescriptionBlock>
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
            </MainContainer>
        </>
    );
}

export default TaskDetails;

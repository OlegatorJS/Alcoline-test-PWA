import { MainContainer } from "@/components/Loading/Styled";
import { Spin } from "antd";

function Loading() {
    return (
        <MainContainer>
            <Spin size="large" />
        </MainContainer>
    );
}

export default Loading;

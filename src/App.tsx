import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme as antdTheme } from "antd";
import { createGlobalStyle } from "styled-components";

import Pages from "@/routes/Pages";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/hooks/redux";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

function App() {
    const { defaultAlgorithm, darkAlgorithm } = antdTheme;
    const { type } = useAppSelector((state) => state.theme);
    return (
        <ConfigProvider
            theme={{
                algorithm: type === "dark" ? darkAlgorithm : defaultAlgorithm,
                token: {
                    // Seed Token
                    // colorBgContainer: "#181818",
                },
                components: {
                    Typography: {
                        colorPrimary: "#FFFFFF",
                        algorithm: true, // Enable algorithm
                        fontFamily: "Inter",
                    },
                    Button: {
                        colorPrimary: "#3A57E8",
                        colorSuccessBg: "#52C41A",
                        borderRadius: 50,
                        fontSize: 16,
                        algorithm: true, // Enable algorithm
                    },
                    Card: {
                        actionsBg: "#212121",
                        algorithm: true, // Enable algorithm
                    },
                    Collapse: {
                        headerPadding: "16px",
                        borderRadius: 10,
                        fontSize: 16,
                        headerBg: type === "dark" ? "#141414" : "#e7e7e7",
                        contentBg: type === "dark" ? "#141414" : "#e7e7e7",
                        algorithm: true, // Enable algorithm
                    },
                    Layout: {
                        headerBg: type === "dark" ? "#181818" : "#e7e7e7",
                        footerBg: type === "dark" ? "#181818" : "#e7e7e7",
                        algorithm: true, // Enable algorithm
                    },
                },
            }}
        >
            <GlobalStyle />
            <BrowserRouter>
                <Pages />
            </BrowserRouter>
        </ConfigProvider>
    );
}

export default App;

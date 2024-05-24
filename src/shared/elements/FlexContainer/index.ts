import styled from "styled-components";

interface IFlexContainerProps {
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    flexWrap?: string;
    alignContent?: string;
    width?: string;
    height?: string;
    gap?: string;
}

const FlexContainer = styled.div<IFlexContainerProps>`
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent || "center"};
    align-items: ${({ alignItems }) => alignItems || "center"};
    ${({ width }) => (width ? `width: ${width}` : "")};
    ${({ height }) => (height ? `height: ${height}` : "")};
    ${({ gap }) => (gap ? `gap: ${gap}` : "")};
    ${({ flexDirection }) =>
        flexDirection ? `flex-direction: ${flexDirection}` : ""};
    ${({ flexWrap }) => (flexWrap ? `flex-wrap: ${flexWrap}` : "")};
    ${({ flexWrap, alignContent }) =>
        (flexWrap === "wrap" || flexWrap === "wrap-reverse") && alignContent
            ? `align-content: ${alignContent}`
            : ""};
`;

export default FlexContainer;

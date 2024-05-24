import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
    type: string;
}

// пытаемся получить тему из локального хранилища браузера
// если там ничего нет, то пробуем получить тему из настроек системы
// если и настроек нет, то используем темную тему
const getTheme = (): string => {
    const theme = `${window?.localStorage?.getItem("theme")}`;
    if (["light", "dark"].includes(theme)) return theme;

    return "dark";
};

const initialState: ThemeState = {
    type: getTheme(),
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        set: (state, action) => {
            console.log(current(state));
            console.log(action);
            state.type = action.payload;
        },
    },
});

console.log(initialState);

export const { set } = themeSlice.actions;

export default themeSlice.reducer;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";
import themeReducer from "./slices/ThemeSlice";
import userReducer from "./slices/UserSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer,
    user: userReducer,
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer,
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

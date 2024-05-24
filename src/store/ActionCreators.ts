import { AppDispatch } from "./index";
import { authSlice } from "./slices/AuthSlice";
import { checkLogin } from "@/api/mock";
import { IAuth } from "@/models/auth";

export const login = (data: IAuth) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await checkLogin(data);
            dispatch(
                authSlice.actions.loginSuccess({
                    access: response.access,
                    username: data.username,
                }),
            );
        } catch (e) {
            console.error("Error Login", e);
        }
    };
};

export const logoutRequest = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(authSlice.actions.logout());
        } catch (e) {
            console.error("Error Login", e);
        }
    };
};

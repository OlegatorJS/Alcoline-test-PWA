import { IAuth, IAuthResponse } from "@/models/auth";

export const checkLogin = (data: IAuth): Promise<IAuthResponse> =>
    new Promise((resolve) => {
        setTimeout(
            () => resolve({ access: "eyJhbGciO", refresh: "eyJhbGciO" }),
            1000,
        );
    });

import asyncComponentLoader from "@/utils/loader";

import { Pages, Routes } from "./types";
import ProductCard from "@/pages/WorkPlan/ProductCard";

const routes: Routes = {
    [Pages.Login]: {
        component: asyncComponentLoader(
            () => import("@/pages/Authorization/Login/Login"),
        ),
        path: "/login",
        title: "Login",
        isPrivate: false,
    },
    [Pages.PasswordRecovery]: {
        component: asyncComponentLoader(
            () =>
                import(
                    "@/pages/Authorization/PasswordRecovery/PasswordRecovery"
                ),
        ),
        path: "/password-recovery",
        title: "Password Recovery",
        isPrivate: false,
    },
    [Pages.NewPassword]: {
        component: asyncComponentLoader(
            () => import("@/pages/Authorization/NewPassword/NewPassword"),
        ),
        path: "/new-password/:token",
        title: "New Password",
        isPrivate: false,
    },
    [Pages.Profile]: {
        component: asyncComponentLoader(
            () => import("@/pages/Profile/MainInformation"),
        ),
        path: "/profile",
        title: "Profile",
        isPrivate: true,
    },
    [Pages.Account]: {
        component: asyncComponentLoader(
            () => import("@/pages/Profile/Account"),
        ),
        path: "/profile/account",
        title: "Account",
        isPrivate: true,
    },
    [Pages.ChangePassword]: {
        component: asyncComponentLoader(
            () => import("@/pages/Profile/ChangePassword"),
        ),
        path: "/profile/change-password",
        title: "Change Password",
        isPrivate: true,
    },
    [Pages.ChangePhone]: {
        component: asyncComponentLoader(
            () => import("@/pages/Profile/ChangePhone"),
        ),
        path: "/profile/change-phone",
        title: "Change Phone",
        isPrivate: true,
    },
    [Pages.Dashboard]: {
        component: asyncComponentLoader(
            () => import("@/pages/Dashboard/Dashboard"),
        ),
        path: "/",
        title: "Dashboard",
        isPrivate: true,
    },
    [Pages.WorkPlan]: {
        component: asyncComponentLoader(
            () => import("@/pages/WorkPlan/WorkPlan"),
        ),
        path: "/work-plan",
        title: "Work Plan",
        isPrivate: true,
    },
    [Pages.TaskDetails]: {
        component: asyncComponentLoader(
            () => import("@/pages/WorkPlan/TaskDetails/TaskDetails"),
        ),
        path: "/work-plan/task/:id",
        title: "Task details",
        isPrivate: true,
    },
    [Pages.AboutPoint]: {
        component: asyncComponentLoader(
            () => import("@/pages/WorkPlan/AboutPoint/AboutPoint"),
        ),
        path: "/work-plan/details/:id",
        title: "Point details",
        isPrivate: true,
    },
    [Pages.Duty]: {
        component: asyncComponentLoader(
            () => import("@/pages/WorkPlan/Duty/Duty"),
        ),
        path: "/work-plan/duty/:id",
        title: "Point details",
        isPrivate: true,
    },
    [Pages.RemainingGoods]: {
        component: asyncComponentLoader(
            () => import("@/pages/WorkPlan/RemainingGoods/RemainingGoods"),
        ),
        path: "/work-plan/remaining/:id",
        title: "Remaining Goods",
        isPrivate: true,
    },
    [Pages.PrioritySale]: {
        component: asyncComponentLoader(
            () => import("@/pages/WorkPlan/PrioritySale/PrioritySale"),
        ),
        path: "/work-plan/priority-sale/:id",
        title: "Priority Sale",
        isPrivate: true,
    },
    [Pages.Upsells]: {
        component: asyncComponentLoader(
            () => import("@/pages/WorkPlan/Upsells/Upsells"),
        ),
        path: "/work-plan/upsells/:id",
        title: "Upsells",
        isPrivate: true,
    },
    [Pages.ProductCard]: {
        component: asyncComponentLoader(
            () => import("@/pages/WorkPlan/ProductCard/ProductCard"),
        ),
        path: "/work-plan/product/:id",
        title: "Upsells",
        isPrivate: true,
    },
};

export default routes;

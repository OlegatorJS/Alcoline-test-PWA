import { FC } from "react";
import { PathRouteProps } from "react-router-dom";
import ProductCard from "@/pages/WorkPlan/ProductCard";

enum Pages {
    Login,
    PasswordRecovery,
    NewPassword,
    Profile,
    Account,
    ChangePassword,
    ChangePhone,
    Dashboard,
    WorkPlan,
    TaskDetails,
    AboutPoint,
    Duty,
    RemainingGoods,
    PrioritySale,
    Upsells,
    ProductCard,
}

type PathRouteCustomProps = {
    title?: string;
    component: FC;
    isPrivate: boolean;
};

type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>;

export type { Routes };
export { Pages };

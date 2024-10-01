import { Route, Switch } from "react-router-dom";
import { homeRoutes } from "./HomeRoutes"; // homeRoutesのインポート
import { Login } from "../components/pages/Login/Login";
import { Register } from "../components/pages/register/Register";
import { HeaderLayout } from "../components/organisms/layout/HeaderLayout";

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
            <Route
                path="/home"
                render={({ match: { url } }) => (
                <Switch>
                    {homeRoutes.map((route) => (
                    <Route
                        key={route.path}
                        exact={route.exact}
                        path={`${url}${route.path}`}
                    >
                        <HeaderLayout>{route.children}</HeaderLayout>
                    </Route>
                    ))}
                </Switch>
                )}
            />
        </Switch>
    );
};

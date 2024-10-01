import { Route, Routes } from "react-router-dom";
import { homeRoutes } from "./HomeRoutes"; // homeRoutesのインポート
import { Login } from "../components/pages/Login/Login";
import { Register } from "../components/pages/register/Register";
import { HeaderLayout } from "../components/organisms/layout/HeaderLayout";

export const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={
                <Routes>
                    {homeRoutes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<HeaderLayout>{route.children}</HeaderLayout>}
                        />
                    ))}
                </Routes>
            } />
        </Routes>
    );
};
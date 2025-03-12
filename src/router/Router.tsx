import { Route, Routes } from "react-router-dom";
import { routers } from "./HomeRoutes";
import { Login } from "../components/pages/Login/Login";
import { Register } from "../components/pages/register/Register";
import { HeaderLayout } from "../components/organisms/layout/HeaderLayout";
import { VocaCards } from "../components/pages/deck/VocaCardList";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="register" element={<Register />} />
            {routers.map((route) => (
            <Route
                key={route.path}
                path={route.path}
                element={<HeaderLayout>{route.element}</HeaderLayout>}
                />
            ))}
            <Route path="decks/:id" element={<HeaderLayout><VocaCards /></HeaderLayout>} />
        </Routes>
    );
};
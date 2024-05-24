import { useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";

import NotFound from "./NotFound";
import Home from "./home/Home";
import Cantaloupe from "./cantaloupe/Cantaloupe";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Router404Inject />}>
                    <Route index element={<Home />} />
                    <Route path={"/project-cantaloupe"} element={<Cantaloupe />}></Route>
                    <Route path={"*"} element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

const Router404Inject = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const splitPath = location.search.split("/");
        if (splitPath[0] === "?") {
            navigate(splitPath[1]);
        }
    }, [location]);

    return <Outlet />;
};

export default Router;

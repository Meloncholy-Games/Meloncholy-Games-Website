import { useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";

import NotFound from "./NotFound";
import HomePage from "./home/HomePage";
import About from "./about/About";
import CantaloupePage from "./cantaloupe/CantaloupePage";
import Contact from "./contact/Contact";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Router404Inject />}>
                    <Route index element={<HomePage />} />
                    <Route path={"/about"} element={<About />} />
                    <Route path={"/project-cantaloupe"} element={<CantaloupePage />} />
                    <Route path={"/contact"} element={<Contact />} />
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
    }, [location, navigate]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [location.pathname]);

    return <Outlet />;
};

export default Router;

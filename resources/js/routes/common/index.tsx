import React from "react";
import { RouteObject } from "react-router-dom";
import App from "../../app";
import moduleRoutes from "../modules";

const initRoutes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [...moduleRoutes],
    },
];

export default initRoutes;

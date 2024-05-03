import React from "react";
import { RouteObject } from "react-router-dom";
import Analytics from "../../modules/analytics";
import Audience from "../../modules/audience";
import Automations from "../../modules/automations";
import Campaign from "../../modules/campaign";
import Content from "../../modules/content";
import Dashboard from "../../modules/dashboard";
import Pulse from "../../modules/pulse";

const initRoutes: RouteObject[] = [
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/campaign",
        element: <Campaign />,
    },
    {
        path: "/automations",
        element: <Automations />,
    },
    {
        path: "/audience",
        element: <Audience />,
    },
    {
        path: "/analytics",
        element: <Analytics />,
    },
    {
        path: "/pulse",
        element: <Pulse />,
    },
    {
        path: "/content",
        element: <Content />,
    },
];

export default initRoutes;

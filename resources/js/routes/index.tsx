import { useRoutes } from "react-router-dom";

import commonRoutes from "./common";

const Routes = () => useRoutes([...commonRoutes]);

export default Routes;

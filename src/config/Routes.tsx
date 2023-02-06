import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/details/:id",
                element: <Details />,
            },
        ],
    },
]);

export default router;

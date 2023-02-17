import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details/Details";
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
                path: "/:type/:id",
                element: <Details />,
            },
        ],
    },
]);

export default router;

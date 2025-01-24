import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Voice from "./pages/Voice";
import Gemini from "./pages/Gemini";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "voice",
                element: <Voice />,
            },
            {
                path: "gemini",
                element: <Gemini />,
            }
        ],
    },
]);

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import BlogDetail from "../pages/BlogDetail";
import BlogSave from "../pages/BlogSave";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        // errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/blog/:id",
                element: <BlogDetail />,
            },
            {
                path: "/blogadd",
                element: <BlogSave />,
            },
        ],
    },
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;

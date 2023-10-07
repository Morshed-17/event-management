import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import EventDetails from "../pages/EventDetails";


const MyRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('/events.json')
            },
            {
                path: 'event/:id',
                element: <EventDetails/>
            }
        ]
    }
])

export default MyRouter;
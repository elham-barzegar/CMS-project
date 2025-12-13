import {createBrowserRouter, Outlet} from "react-router";
import Home from "./pages/Home/page";
import Products from "./pages/Products/page";
import Users from "./pages/Users/page";
import Comments from "./pages/Comments/page";
import TicketDetails from "./pages/TicketDetails/page";
import Tickets from "./pages/Tickets/page";
// import clsx from "clsx";
import DashboardLayout from "./components/layouts/DashboardLayout.jsx";

// const isOpen = false;

const router = createBrowserRouter([

    {

        path: "/",
        element:  <DashboardLayout />,

        // (
        //     // <div className={clsx("text-center", "p-4", isOpen ? "bg-green-200" : "bg-red-200")}>
        //     //     Application Layout
        //     //     <Outlet />
        //     // </div>
        //
        // ),
        children: [
                {
                    index: true,
                    element: <Home/>,
                },
                {
                    path: "/products",
                    element: <Products />,
                },
                {
                    path: "users",
                    element: <Users />,
                },
                {
                    path: "/ticket",
                    element: <Tickets />,
                },
                {
                    path: "/tickets/:ticketId",
                    element: <TicketDetails />,
                },
                {
                    path: "/comments",
                    element: <Comments />,
                }

            ]
    }
]);

export  default router
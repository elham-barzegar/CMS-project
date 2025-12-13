import {RouterProvider, ScrollRestoration} from "react-router";
import router from "./routes.jsx";


const App = () => {
    return (
        <RouterProvider router={router}>
            <ScrollRestoration />
        </RouterProvider>
    );
};
export default App;
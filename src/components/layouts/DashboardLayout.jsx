import {Outlet} from "react-router";
import Sidebar from "../../features/sidebar/Sidebar";
import Topbar from "../../features/topbar/Topbar.jsx";
import BackgroundOverlay from "../common/BackgroundOverlay.jsx";

const DashboardLayout = () => {
    return (
        <main id="root" className="flex">
             <Sidebar />
            <section className="grow *:px-6">
                <Topbar />
                <div id="content" className="mt-6 container mx-auto">
                    <div className="relative z-10">
                        <Outlet />
                    </div>

                </div>
            </section>
            <BackgroundOverlay />

        </main>
    )
}
export default DashboardLayout;
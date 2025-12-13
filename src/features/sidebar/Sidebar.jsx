import React from "react"
import SidebarHeader from "./components/SidebarHeader";
import Menus from "./components/Menus.jsx";
import menus from "../../data/menus.js";

const Sidebar = () => {
    return (
        <aside className="w-[272px] relative z-10 bg-white h-screen sticky top-0 border-l primary-border-color p-6">
            <SidebarHeader />
            <Menus menus={menus} />
        </aside>
    )
}
export default Sidebar;
import React from 'react'
import Notifications from "./components/Notifications.jsx";
import SearchInput from "./components/SearchInput.jsx";
import Divider from "./components/Divider.jsx";
import Profile from "./components/Profile.jsx";

const Topbar = () => {
    return (
        <div className="w-full h-20 relative z-10 border-b primary-border-color flex items-center justify-between">
            <div>
                <SearchInput />
            </div>

            <div className="flex items-center gap-3">
                <Notifications />
                <Divider />
                <Profile />
            </div>
        </div>
    )
}
export default Topbar;
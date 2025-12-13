import React  from "react";
import { Link} from "react-router"

const SidebarHeader = () => {
    return (
        <div className="pb-6 border-b primary-border-color">
            <Link to="/" className="flex items-center gap-3">
                <img src="/images/logo.png" alt="logo" className="size-6"/>
                <span className="text-xl font-black text-zinc-900"> پنل سبز </span>
             </Link>
        </div>
    )
}
export default SidebarHeader;
import React from 'react'
import {Avatar_URL} from "../../../data/constants.js";

const Profile = () => {
    return (
        <div tabIndex="1" className="flex items-center focus-within:ring-black/20 cursor-pointer gap-2 select-none p-3 hover:bg-black/5 rounded-md duration-150">
            <div className="size-10">
                <img src={Avatar_URL} alt={"Profile Avatar"} className="size-full rounded-full object-cover" />
            </div>
            <div>
                <p className="text-sm font-bold">الهام برزگر</p>
                <p className="text-sm text-gray-600">مدیرعامل</p>
            </div>
        </div>
    )
}
export default Profile;
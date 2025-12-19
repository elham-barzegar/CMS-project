import React from 'react'
import LastProducts from "./components/LastProducts.jsx";
import LastUsers from "./components/LastUsers.jsx";

const QuickOverview = () => {
    return (
        <div className="space-y-10 grid grid-cols-5 *:py-5 *:border *:primary-border-color *:bg-white *:rounded-lg gap-5 *:shadow">
            <LastProducts />
            <LastUsers />
        </div>
    )
}
export default QuickOverview;
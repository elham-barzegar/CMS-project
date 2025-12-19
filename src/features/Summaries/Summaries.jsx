import React from 'react'
import {generateSummaries} from "../../utils/home.js";
import SummaryCard from "./components/SummaryCard.jsx";

const Summaries = () => {
    const summaries = generateSummaries({
        productsLength: 90,
        ticketsLength: 80,
        adminsLength :3,
        usersLength: 200,
    });
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5 mt-6">
            {summaries.map(summary=> <SummaryCard {... summary}  key={summary.id}/>)}
        </div>
    )
}
export default Summaries;
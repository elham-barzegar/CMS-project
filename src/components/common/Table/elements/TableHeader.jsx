import React from 'react'

const TableHeader = ({header}) => {
    const {Buttons}  = Headers;

    return (
        <div className="flex items-center justify-between px-5 h-[64px]">
            <p className="text-xl">
                <strong>{header.title}</strong>
            </p>
        </div>
    )
}
export default TableHeader;
import React from 'react'
import Table from "../../components/common/Table/Table.jsx";
import {Link} from "react-router";


const LastProductTable = () => {
    const  Buttons = () => {
        return <Link> صفحه محصولات</Link>
    };
    return (
        <div className="">
            <Table header={{title: "لیست محصولات" , Buttons: Buttons}}>
            {/*    Children */}
            </Table>
        </div>
    )
}
export default LastProductTable;
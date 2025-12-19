import React from 'react'
import Modal from "../../../components/common/Modal.jsx";
import {HiOutlinePencilAlt} from "react-icons/hi";

const EditProductIcon = () => {
    const Trigger = () => (
        <button className="cursor-pointer text-lg text-green-500 \">
            <HiOutlinePencilAlt className="text-xl" />
        </button>
    );

    return <Modal title="تغییر جزییات محصول" Trigger={<Trigger />}> </Modal>;
}
export default EditProductIcon;
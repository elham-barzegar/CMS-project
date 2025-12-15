import React from 'react'
import Modal from "../../../components/common/Modal.jsx";
import {HiEye} from "react-icons/hi";

const ChangeVisibilityIcon = () => {

    const Trigger = () => (
        <button className="cursor-pointer text-lg text-sky-500 \">
            <HiEye className="text-xl" />
        </button>
    );

    return <Modal title="تغییر وضعیت انتشار محصول" Trigger={<Trigger />}> </Modal>;
}
export default ChangeVisibilityIcon;
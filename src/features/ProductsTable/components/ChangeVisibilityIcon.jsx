import React from 'react'
import Modal from "../../../components/common/Modal.jsx";
import {HiEye} from "react-icons/hi";
import clsx from "clsx";

const ChangeVisibilityIcon = ({handler, product}) => {

    const Trigger = () => (
        <button className="cursor-pointer text-lg text-sky-500 \">
            <HiEye className="text-xl" />
        </button>
    );

    return <Modal title="تغییر وضعیت انتشار محصول" Trigger={<Trigger />} onSubmit={()=>
    handler(product.id)}>
        <div className="flex items-center justify-center">
            <p>
                آیا از
                &nbsp;<span className={clsx(
                    product.isPublished ? "text-blue-500" : "text-green-500",
            )}>
                    <strong>{product.isPublished ? "خصوصی" : "عمومی"}</strong>
                </span> &nbsp;
                کردن این محصول اطمینان دارید؟
            </p>
        </div>

    </Modal>
}
export default ChangeVisibilityIcon;
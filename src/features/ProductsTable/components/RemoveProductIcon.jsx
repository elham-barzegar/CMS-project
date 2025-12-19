import React from 'react'
import Modal from "../../../components/common/Modal.jsx";
import {HiOutlineTrash} from "react-icons/hi";

const RemoveProductIcon = ({product, handler}) => {

    const Trigger = () => (
        <button className="cursor-pointer text-lg text-red-500 \">
        <HiOutlineTrash className="text-xl" />
    </button>
    );

    return <Modal title="حذف محصول" Trigger={<Trigger />} onSubmit={()=> handler(product.id)}>
        <div className="flex items-center justify-center">
            آیا از حذف محصول
            &nbsp;<kbd className="px-2 py-1 rounded-md bg-rose-500/15 font-black text-red-500">
                {product.title}
            </kbd>   &nbsp;
            اطمینان دارید؟
        </div>
    </Modal>;
};

export default RemoveProductIcon;
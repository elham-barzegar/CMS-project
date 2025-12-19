import React from 'react'
import SectionTitle from "../../../components/common/SectionTitle.jsx";
import {products} from "../../../data/products.js";
import ProductCard from "./ProductCard.jsx";
import OpenInPage from "./OpenInPage.jsx";

const LastProducts = () => {
    return (
        <div className={"col-span-3 max-h-max"}>
            <SectionTitle title="آخرین محصولات"/>
            <div className="space-y-3 mt-5">
                {products.slice(-3).map((product) => (<ProductCard  key={product.id} { ... product } /> ))}
            </div>

            <OpenInPage itemsLength={products.length} navigateTo="/products"/>
        </div>
    )
}
export default LastProducts;
import Table from "../../components/common/Table/Table.jsx";
import TableHead from "../../components/common/Table/elements/TableHead.jsx";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell.jsx";
import TableBody from "../../components/common/Table/elements/TableBody.jsx";
import TableRow from "../../components/common/Table/elements/TableRow.jsx";
import TableCell from "../../components/common/Table/elements/TableCell.jsx";
import { productsAllTableHeadRow} from "../../data/products.js";
import clsx from "clsx";

const ProductTableView = ({products, setProducts, paginatedProducts}) => {

    return (
        <Table header= {{title:"لیست محصولات" }} pagination={{
            items: products,
            setItems: setProducts,
            itemsPerPage: 4,
        }}
        >
            <TableHead>
                {productsAllTableHeadRow.map((cell)=> (
                    <TableHeadCell key={cell}>{cell}</TableHeadCell>
                ))}

            </TableHead>
            <TableBody>
                {paginatedProducts.map(product => (
                    <TableRow key={product.id}>
                        <TableCell>{product.id.slice(0, 6)} ... </TableCell>
                        <TableCell>{product.title}</TableCell>
                        <TableCell><img src={product.img} alt={product.title} className="w-[100px] rounded-md border primary-border-color"/></TableCell>
                        <TableCell>
                            <p  className={clsx(product.isPublished ? "success-badge" : "danger-badge", "badge")}> {product.isPublished  ? "عمومی" : "خصوصی"} </p>
                        </TableCell>
                        <TableCell>{product.price.toLocaleString("fa-IR")} تومان </TableCell>
                        <TableCell className={"mr-4"}>{product.entity}</TableCell>
                        <TableCell>
                            ICONS
                        </TableCell>

                    </TableRow>
                ))}

            </TableBody>
        </Table>
    )
}
export default ProductTableView;
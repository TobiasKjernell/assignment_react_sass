import type { IProduct } from "../../utils/interfaces";
import './productItem.scss';


interface IProductItem {
    product: IProduct,
    onDelete: (value:number) => void;
    onToggleCheckbox: (value: number) => void;
}
const ProductItem = ({ product, onDelete, onToggleCheckbox }:IProductItem ) => {

    return (
        <li className="product">
            <div className="product__item-group">
                <input className="product__checkbox" checked={product.packed} type="checkbox" onChange={() =>onToggleCheckbox(product.id)} />
                <p>{product.quantity}</p>
            </div>
            <p className={`product__item-text ${product.packed ? 'packed' : ''} `}>{product.description}</p>
            <button onClick={() => onDelete && onDelete(product.id)} className="product__close-btn">&#x2716;</button>
        </li>
    )
}

export default ProductItem;
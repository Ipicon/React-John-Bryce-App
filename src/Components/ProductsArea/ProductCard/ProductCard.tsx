import "./ProductCard.css";
import ProductModel from "../../../Models/ProductModel";
import appConfig from "../../../Utils/AppConfig";
import {Link} from "react-router-dom";

interface ProductCardProps {
    product: ProductModel;
}

function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <div className="ProductCard Box">
            <div>
                {props.product.name}
                <br/>
                Price: {props.product.price}$
                <br/>
                Stock: {props.product.stock}
            </div>
            <div>
                <Link to={`/products/details/${props.product.id}`}>
                    <img src={appConfig.productImagesUrl + props.product.imageName} alt="product"/>
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;

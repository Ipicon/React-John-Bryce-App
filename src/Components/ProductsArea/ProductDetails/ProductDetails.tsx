import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notifyService from "../../../Services/NotifyService";
import productsService from "../../../Services/ProductsService";
import appConfig from "../../../Utils/AppConfig";
import "./ProductDetails.css";

function ProductDetails(): JSX.Element {

    const params = useParams();
    const [product, setProducts] = useState<ProductModel>();

    useEffect(() => {
        const id = +params.id;
        productsService.getOneProduct(id)
            .then(product => setProducts(product))
            .catch(err => notifyService.error(err));
    }, []);

    return (
        <div className="ProductDetails">

            <h2>Product Details: </h2>

            <h3>Name: {product?.name}</h3>
            <h3>Price: ${product?.name}</h3>
            <h3>Stock: {product?.stock}</h3>
            <img src={appConfig.productsImagesUrl + product?.imageName} />

            <br />
            <br />

            <NavLink to="/products">Back</NavLink>

        </div>
    );
}

export default ProductDetails;

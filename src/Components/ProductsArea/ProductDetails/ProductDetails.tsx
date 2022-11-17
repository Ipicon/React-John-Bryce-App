import "./ProductDetails.css";
import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import ProductService from "../../../Services/ProductService";
import ProductModel from "../../../Models/ProductModel";
import appConfig from "../../../Utils/AppConfig";
import notifyService from "../../../Services/NotifyService";
import Spinner from "../../SharedArea/Spinner/Spinner";
import {authStore} from "../../../Redux/AuthState";

function ProductDetails(): JSX.Element {
    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState<ProductModel>();

    useEffect(() => {
        const id = +params.id!;
        ProductService.getProductById(id)
            .then((product) => {
                product.imageName = `${product.imageName}?${Date.now()}`;
                setProduct(product);
            })
            .catch(err => notifyService.error(err));
    }, [params.id])

    const deleteProduct = async () => {
        try {
            const ok = window.confirm('Are you sure you want to delete this product?');
            if (!ok) return;

            await ProductService.deleteProduct(product!.id);
            notifyService.success("Product has been deleted");

            navigate("/products");
        } catch (err: any) {
            notifyService.error(err);
        }
    }

    console.log("Product")

    return (
        <div className="ProductDetails">
            {!product && <Spinner/>}
            {product && <>
                <h3>Name: {product.name}</h3>
                <h3>Price: {product.price}</h3>
                <h3>Stock: {product.stock}</h3>
                <img src={appConfig.productImagesUrl + product.imageName} alt="product"/>

                <br/>
                <br/>

                <Link to="/products">Back</Link>
                {authStore.getState().user && <>
                    <span> | </span>
                    <Link onClick={deleteProduct} to="#">Delete</Link>
                    <span> | </span>
                    <Link to={`/products/edit/${product.id}`}>Edit</Link>
                </>}
            </>}
        </div>
    );
}

export default ProductDetails;

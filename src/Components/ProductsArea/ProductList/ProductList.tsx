import "./ProductList.css";
import {useEffect, useState} from "react";
import productsService from "../../../Services/ProductService";
import ProductModel from "../../../Models/ProductModel";
import ProductCard from "../ProductCard/ProductCard";
import notifyService from "../../../Services/NotifyService";
import {Link} from "react-router-dom";
import usePageTitle from "../../../Utils/usePageTitle";
import Spinner from "../../SharedArea/Spinner/Spinner";

function ProductList(): JSX.Element {
    usePageTitle("Product List Page");
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productsService.getAllProducts()
            .then(products => setProducts(products))
            .catch(err => notifyService.error(err));
    }, [])

    return (
        <div className="ProductList">
            {products.length === 0 && <Spinner/>}
            <Link to="/products/new">➕</Link>
            {products.map(product => <ProductCard product={product} key={product.id}/>)}
        </div>
    );
}

export default ProductList;

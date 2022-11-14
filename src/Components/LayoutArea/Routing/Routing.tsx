import { Fragment } from "react";
import LoadableExport from "react-loadable";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import Spinner from "../../SharedArea/Spinner/Spinner";
import PageNotFound from "../PageNotFound/PageNotFound";

function Routing(): JSX.Element {

    const LazyAbout = LoadableExport({
        loader: () => import("../../AboutArea/About/About"),
        loading: Spinner
    });

    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/details/:id" element={<ProductDetails />} />
            <Route path="/about" element={<LazyAbout />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default Routing;

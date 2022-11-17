import "./Routing.css";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import PageNotFound from "../PageNotFound/PageNotFound";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import React, {lazy, Suspense} from "react";
import Spinner from "../../SharedArea/Spinner/Spinner";
import EmployeeList from "../../EmployeeArea/EmployeeList/EmployeeList";
import EmployeeDetails from "../../EmployeeArea/EmployeeDetails/EmployeeDetails";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";
import CategoriesList from "../../CategoryArea/CategoriesList/CategoriesList";

const About = lazy(() => import('../../AboutArea/About/About'));

function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/products" element={<ProductList/>}/>
            <Route path="/products/details/:id" element={<ProductDetails/>}/>
            <Route path="/products/new" element={<AddProduct/>}/>
            <Route path="/products/edit/:id" element={<EditProduct/>}/>
            <Route path="/about" element={
                <Suspense fallback={<Spinner/>}>
                    <About/>
                </Suspense>
            }/>
            <Route path="/" element={<Navigate to="home"/>}/>
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/employees/details/:id" element={<EmployeeDetails />} />
            <Route path="/categories" element={<CategoriesList />} />
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    );
}

export default Routing;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from "./Components/LayoutArea/Layout/Layout";
import {BrowserRouter} from "react-router-dom";
import interceptorsService from "./Services/InterceptorsService";
import {Provider} from "react-redux";
import {productStore} from "./Redux/ProductsState";
import {authStore} from "./Redux/AuthState";

interceptorsService.createInterceptor();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={productStore}>
            <Layout/>
        </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

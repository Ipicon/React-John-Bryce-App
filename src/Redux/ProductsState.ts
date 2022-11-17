import ProductModel from "../Models/ProductModel";
import {applyMiddleware, compose, createStore} from "redux";
import {addActionsClearing, countActions} from "./Middleware";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";

export class ProductsState {
    public products: ProductModel[] = [];
}

export enum ProductActionType {
    FetchProducts = "FetchProducts",
    AddProduct = "AddProduct",
    UpdateProduct = "UpdateProduct",
    DeleteProduct = "DeleteProduct"
}

export interface ProductsAction {
    type: ProductActionType,
    payload: ProductModel | ProductModel[] | number,
}

export const fetchProductsAction = (products: ProductModel[]): ProductsAction => {
    return {
        type: ProductActionType.FetchProducts,
        payload: products
    };
}

export const addProductAction = (product: ProductModel): ProductsAction => {
    return {
        type: ProductActionType.AddProduct,
        payload: product
    };
}

export const updateProductAction = (product: ProductModel): ProductsAction => {
    return {
        type: ProductActionType.UpdateProduct,
        payload: product
    };
}

export const deleteProductAction = (id: number): ProductsAction => {
    return {
        type: ProductActionType.DeleteProduct,
        payload: id
    };
}

export const productsReducer = (currentState = new ProductsState(), action: ProductsAction): ProductsState => {
    const newState = {...currentState};

    switch (action.type) {
        case ProductActionType.FetchProducts:
            newState.products = action.payload as ProductModel[];
            break;

        case ProductActionType.AddProduct:
            newState.products.push(action.payload as ProductModel);
            break;

        case ProductActionType.UpdateProduct:
            const indexToUpdate = newState.products.findIndex(p => p.id === (action.payload as ProductModel).id);

            if (indexToUpdate !== -1) {
                newState.products[indexToUpdate] = action.payload as ProductModel;
            }

            break;

        case ProductActionType.DeleteProduct:
            const indexToDelete = newState.products.findIndex(p => p.id === action.payload);

            if (indexToDelete !== -1) {
                newState.products.splice(indexToDelete, 1);
            }

            break;

        default:
            return newState;
    }

    return newState;
}

// export const productStore = createStore(productsReducer, compose(
//     applyMiddleware(
//         addActionsClearing,
//         countActions,
//         logger),
//     composeWithDevTools()));

export const productStore = createStore(productsReducer, applyMiddleware(
    addActionsClearing,
    countActions,
    logger
));
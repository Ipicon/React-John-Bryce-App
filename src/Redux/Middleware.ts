import {ProductActionType, ProductsAction, ProductsState} from "./ProductsState";
import {Middleware} from "redux";

let counter = 0;

export const countActions: Middleware<{}, ProductsState> = storeApi => next => action => {
    console.log(`Current Action ${action.type}, Total Action ${++counter}`);

    // Before state

    next(action); // Here the reducer will be invoked

    // After state
}

export const addActionsClearing: Middleware<{}, ProductsState> = storeApi => next => (action: ProductsAction) => {
    next(action);

    if (action.type === ProductActionType.AddProduct) {
        console.clear()
        console.log("Added product", action.payload)
    }
}
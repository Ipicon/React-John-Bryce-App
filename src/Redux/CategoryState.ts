import { createStore } from "redux";
import CategoryModel from "../Models/CategoryModel";
import {composeWithDevTools} from "redux-devtools-extension";

export class CategoryState {
    public categories: CategoryModel[] = [];
}

export type CategoryActionType = "FetchCategories";

export interface CategoryAction {
    type: CategoryActionType;
    payload: CategoryModel[]
}

export const fetchCategories = (categories: CategoryModel[]): CategoryAction => ({
    type: "FetchCategories",
    payload: categories
});

export const categoryReducer = (currentState = new CategoryState(), action: CategoryAction) => {
    const newState = {...currentState};

    switch (action.type) {
        case "FetchCategories":
            newState.categories = action.payload;
            break;
        default:
            break;
    }
    return newState;
}

// export const categoryStore = createStore(categoryReducer, composeWithDevTools());
export const categoryStore = createStore(categoryReducer);
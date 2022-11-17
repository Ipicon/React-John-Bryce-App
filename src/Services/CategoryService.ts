import CategoryModel from "../Models/CategoryModel";
import appConfig from "../Utils/AppConfig";
import axios from "axios";
import {categoryStore, fetchCategories} from "../Redux/CategoryState";

class CategoryService {
    public getAllCategories = async (): Promise<CategoryModel[]> => {
        let categories = categoryStore.getState().categories;

        if (categories.length === 0) {
            const response = await axios.get<CategoryModel[]>(appConfig.categoriesUrl);
            categories = response.data;

            categoryStore.dispatch(fetchCategories(categories));
        }

        return categories;
    }
}

const categoryService = new CategoryService();

export default categoryService;

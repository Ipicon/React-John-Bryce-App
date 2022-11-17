import ProductModel from "../Models/ProductModel";
import axios from "axios";
import appConfig from "../Utils/AppConfig";
import {
    addProductAction,
    deleteProductAction, fetchProductsAction,
    productStore,
    updateProductAction
} from "../Redux/ProductsState";

class ProductService {
    public async getAllProducts(): Promise<ProductModel[]> {
        let products = productStore.getState().products;

        if (products.length === 0) {
            const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
            products = response.data;

            productStore.dispatch(fetchProductsAction(products));
        }

        return products;
    }

    public async getProductById(id: number): Promise<ProductModel> {
        let product = productStore.getState().products.find(p => p.id === id);

        if (!product) {
            const response = await axios.get<ProductModel>(appConfig.productsUrl + id);
            product = response.data;
        }

        return product;
    }

    public async addProduct(product: ProductModel): Promise<void> {
        const response = await axios.post<ProductModel>(
            appConfig.productsUrl,
            product,
            {headers: {'Content-Type': 'multipart/form-data'}}
        );

        const addedProduct = response.data;
        productStore.dispatch(addProductAction(addedProduct));
    }

    public async updateProduct(product: ProductModel): Promise<void> {
        const response = await axios.put<ProductModel>(
            appConfig.productsUrl + product.id,
            product,
            {headers: {'Content-Type': 'multipart/form-data'}}
        );

        const updatedProduct = response.data;
        productStore.dispatch(updateProductAction(updatedProduct));

    }

    public async deleteProduct(id: number): Promise<void> {
        await axios.delete<ProductModel>(appConfig.productsUrl + id);
        productStore.dispatch(deleteProductAction(id));
    }
}


const productsService = new ProductService();
export default productsService;
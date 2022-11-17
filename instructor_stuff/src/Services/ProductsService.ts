import axios from "axios";
import ProductModel from "../Models/ProductModel";
import { addProductAction, deleteProductAction, fetchProductsAction, productsStore, updateProductAction } from "../Redux/ProductsState";
import appConfig from "../Utils/AppConfig";

class ProductsService {

    public async getAllProducts(): Promise<ProductModel[]> {
        let products = productsStore.getState().products;
        if (products.length === 0) {
            const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
            products = response.data;
            productsStore.dispatch(fetchProductsAction(products));
        }
        return products;
    }

    public async getOneProduct(id: number): Promise<ProductModel> {
        let product = productsStore.getState().products.find(p => p.id === id);
        if (!product) {
            const response = await axios.get<ProductModel>(appConfig.productsUrl + id);
            product = response.data;
        }
        return product;
    }

    public async addProduct(product: ProductModel): Promise<void> {
        const headers = { "Content-Type": "multipart/form-data" };
        const response = await axios.post<ProductModel>(appConfig.productsUrl, product, { headers });
        const addedProduct = response.data;
        productsStore.dispatch(addProductAction(addedProduct));
    }

    // Another way for sending image: 
    // public async addProduct(product: ProductModel): Promise<void> {
    //     const formData = new FormData();
    //     formData.append("name", product.name);
    //     formData.append("price", product.price.toString());
    //     formData.append("stock", product.stock.toString());
    //     formData.append("image", product.image);
    //     const response = await axios.post<ProductModel>(appConfig.productsUrl, formData);
    //     const addedProduct = response.data;
    //     productsStore.dispatch(addProductAction(addedProduct));
    // }

    public async updateProduct(product: ProductModel): Promise<void> {
        const headers = { "Content-Type": "multipart/form-data" };
        const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, product, { headers });
        const updatedProduct = response.data;
        productsStore.dispatch(updateProductAction(updatedProduct));
    }

    public async deleteProduct(id: number): Promise<void> {
        await axios.delete(appConfig.productsUrl + id);
        productsStore.dispatch(deleteProductAction(id));
    }

}

const productsService = new ProductsService();

export default productsService;
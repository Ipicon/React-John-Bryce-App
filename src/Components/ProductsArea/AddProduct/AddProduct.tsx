import "./AddProduct.css";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductService";
import notifyService from "../../../Services/NotifyService";

function AddProduct(): JSX.Element {
    const { register, handleSubmit, formState: { errors } } = useForm<ProductModel>();
    const navigate = useNavigate();

    const send = async (product: ProductModel) => {
        try {
            product.image = (product.image as unknown as FileList)[0]
            await productsService.addProduct(product);
            notifyService.success("Product has been added successfully");
            navigate("/products");
        } catch (error) {
            notifyService.error(error);
        }
    }

    return (
        <div className="AddProduct">
            <h2>Add Product</h2>
            <form className="Box" onSubmit={handleSubmit(send)}>
                <label>Name: </label>
                <input type="text" {...register("name", ProductModel.nameValidation)}/>
                <span>{errors.name?.message}</span>

                <label>Price:</label>
                <input type="number" step="0.01"  {...register("price", ProductModel.priceValidation)}/>
                <span>{errors.price?.message}</span>

                <label>Stock:</label>
                <input type="number"  {...register("stock", ProductModel.stockValidation)}/>
                <span>{errors.stock?.message}</span>

                <label>Image:</label>
                <input type="file" accept="image/*" {...register("image", ProductModel.imageValidation)}/>
                <span>{errors.image?.message}</span>

                <button> Add </button>
            </form>

            <br/>
            <br/>

            <Link to="/products">Back</Link>
        </div>
    );
}

export default AddProduct;

import "./EditProduct.css";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductService";
import notifyService from "../../../Services/NotifyService";
import {ChangeEvent, useEffect, useState} from "react";
import appConfig from "../../../Utils/AppConfig";

function EditProduct(): JSX.Element {
    const params = useParams();
    const navigate = useNavigate();
    const [image, setImage] = useState("");
    const {register, handleSubmit, setValue, formState: {errors}} = useForm<ProductModel>();

    useEffect(() => {
        productsService.getProductById(+params.id!)
            .then((product) => {
                setValue("id", product.id);
                setValue("name", product.name);
                setValue("price", product.price);
                setValue("stock", product.stock);
                setImage(appConfig.productImagesUrl + product.imageName);
            })
            .catch((error) => notifyService.error(error));
    }, [params.id, setValue]);

    const handleImageChange =(event: ChangeEvent<HTMLInputElement>) : void => {
        if (!event.target.files || !event.target.files[0]) return;
        setImage(URL.createObjectURL(event.target.files[0]));
    }

    const send = async (product: ProductModel) => {
        try {
            product.image = (product.image as unknown as FileList)[0]
            await productsService.updateProduct(product);

            notifyService.success("Product has been added updated");
            navigate(`/products/details/${product.id}`);
        } catch (error) {
            notifyService.error(error);
        }
    }

    return (
        <div className="EditProduct">
            <h2>Edit Product</h2>
            <form className="Box" onSubmit={handleSubmit(send)}>
                <input type="hidden" {...register("id")}/>

                <label>Name: </label>
                <input type="text" {...register("name", ProductModel.nameValidation)}/>
                <span>{errors.name?.message}</span>

                <label>Price:</label>
                <input type="number" step="0.01"  {...register("price", ProductModel.priceValidation)}/>
                <span>{errors.price?.message}</span>

                <label>Stock:</label>
                <input type="number"  {...register("stock", ProductModel.stockValidation)}/>
                <span>{errors.stock?.message}</span>

                <div className="ImageRow">
                    <div>
                        <label>Image:</label>
                        <input type="file" accept="image/*" {...register("image")} onChange={handleImageChange}/>
                    </div>
                    <img src={image} alt="productImage"/>
                </div>

                <span>{errors.image?.message}</span>
                <button> Update</button>
            </form>

            <br/>
            <br/>

            <Link to={`/products/details/${params.id}`}>Back</Link>
        </div>
    );
}

export default EditProduct;

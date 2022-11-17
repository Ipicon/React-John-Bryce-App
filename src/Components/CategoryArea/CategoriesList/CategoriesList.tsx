import "./CategoriesList.css";
import usePageTitle from "../../../Utils/usePageTitle";
import {useEffect, useState} from "react";
import CategoryModel from "../../../Models/CategoryModel";
import categoryService from "../../../Services/CategoryService";
import notifyService from "../../../Services/NotifyService";
import Spinner from "../../SharedArea/Spinner/Spinner";
import appConfig from "../../../Utils/AppConfig";

function CategoriesList(): JSX.Element {
    usePageTitle("Category List Page");
    const [categoriesList, setCategoriesList] = useState<CategoryModel[]>([]);

    useEffect(() => {
        categoryService.getAllCategories()
            .then(category => setCategoriesList(category))
            .catch(err => notifyService.error(err));
    }, [])

    if (categoriesList.length === 0) return <Spinner/>;

    return (
        <div className="CategoriesList">
            <table className="Box">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody>
                {categoriesList.map(category =>
                    <tr key={category.id}>
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                        <td><img src={appConfig.categoriesImageUrl + category.imageName} alt="category"/></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default CategoriesList;

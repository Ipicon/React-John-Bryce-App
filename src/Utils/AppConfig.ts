// General configuration...
class AppConfig {
    public productsUrl = "";
    public productImagesUrl = "";
    public employeesUrl = "";
    public employeesImageUrl = "";
    public categoriesUrl = "";
    public categoriesImageUrl = "";
    public registerURL = "";
    public loginURL = "";
}

// Dev configuration...
class DevConfig extends AppConfig {
    public productsUrl = "http://localhost:3030/api/products/";
    public productImagesUrl = "http://localhost:3030/api/products/images/";
    public employeesUrl = "http://localhost:3030/api/employees/";
    public employeesImageUrl = "http://localhost:3030/api/employees/images/";
    public registerURL = "http://localhost:3030/api/auth/register/";
    public loginURL = "http://localhost:3030/api/auth/login/";
    public categoriesUrl = "http://localhost:3030/api/categories/";
    public categoriesImageUrl = "http://localhost:3030/api/categories/images/";
}

// Prod configuration...
class ProdConfig extends AppConfig {
    public productsUrl = "http://localhost:3030/api/products/";
    public productImagesUrl = "http://localhost:3030/api/products/images/";
    public employeesUrl = "http://localhost:3030/api/employees/";
    public employeesImageUrl = "http://localhost:3030/api/employees/images/";
    public registerURL = "http://localhost:3030/api/auth/register/";
    public loginURL = "http://localhost:3030/api/auth/login/";
    public categoriesUrl = "http://localhost:3030/api/categories/";
    public categoriesImageUrl = "http://localhost:3030/api/categories/images/";
}

const appConfig = process.env.NODE_ENV === 'development' ? new DevConfig() : new ProdConfig();

export default appConfig;
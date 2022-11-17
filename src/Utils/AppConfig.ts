// General configuration...
class AppConfig {
    public productsUrl = "";
    public productsImagesUrl = "";
}

// Dev configuration...
class DevConfig extends AppConfig {
    public productsUrl = "http://localhost:3030/api/products/"; // Don't forget the ending /
    public productsImagesUrl = "http://localhost:3030/api/products/images/";
    public registerUrl = "http://localhost:3030/api/auth/register/";
    public loginUrl = "http://localhost:3030/api/auth/login/";
}

// Prod configuration...
class ProdConfig extends AppConfig {
    public productsUrl = "http://localhost:3030/api/products/"; // Don't forget the ending /
    public productsImagesUrl = "http://localhost:3030/api/products/images/";
    public registerUrl = "http://localhost:3030/api/auth/register/";
    public loginUrl = "http://localhost:3030/api/auth/login/";
}

const appConfig = process.env.NODE_ENV === "development" ? new DevConfig() : new ProdConfig();

export default appConfig;

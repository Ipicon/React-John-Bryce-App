// General configuration...
class AppConfig {
    public productsUrl = "";
    public productImagesUrl = "";
}

// Dev configuration...
class DevConfig extends AppConfig {
    public productsUrl = "http://localhost:3030/api/products/"; // Don't forget the ending /
    public productsImagesUrl = "http://localhost:3030/api/products/images/";
}

// Prod configuration...
class ProdConfig extends AppConfig {
    public productsUrl = "http://www.northwind/api/products/";
    public productsImagesUrl = "http://www.northwind/api/products/images/";
}

const appConfig = process.env.NODE_ENV === "development" ? new DevConfig() : new ProdConfig();

export default appConfig;

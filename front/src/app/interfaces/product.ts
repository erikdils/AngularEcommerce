export interface Product {
    created: Date;
    lastChange: Date; 
    productName: String;
    categories: String;
    price: Number;
    description: String;
    img: Number;
    imgs: Array<String>;
    fashionLine: String;
    model: String;
    modelType: String;
    _collection: String;
    sizes: Array<String>;
    typeOfSize: Array<String>;
    selectedSize: Number;
    color: String;
    colorProducts: Array<String>;
    selectedColor: String;
    text: String;
    views: Number;
    stars: Stars;
    breadCrumbs: Array<String>;
    amount: Number;
    amountSizes: Array<String>;
}

interface Stars {
    public: Number;
    private: Number;
    voutes: Array<String>;
}

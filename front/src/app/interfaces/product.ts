export interface Product {
    created: Date;
    lastChange: Date; 
    productName: String;
    categories: String;
    price: Number;
    description: String;
    img: Number;
    imgs: [];
    fashionLine: String;
    model: String;
    modelType: String;
    _collection: String;
    sizes: [];
    typeOfSize: [];
    selectedSize: Number;
    color: String;
    colorProducts: [];
    selectedColor: String;
    text: String;
    views: Number;
    stars: Stars;
    breadCrumbs: [];
    amount: Number;
    amountSizes: [];
}

interface Stars {
    public: Number;
    private: Number;
    voutes: []
}

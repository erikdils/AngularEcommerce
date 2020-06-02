// import { User } from './@modules/@common-dependencies/interfaces/user';
import { Product } from './interfaces/product';
import { Card } from './interfaces/card';

interface extraAlert {
    show: Boolean;
    title: String;
    userMsg: String;
    devMsg: String;
}

interface RegisterState {
    // user: User;
    roles: Array<string>; // <----------------- not yet implemented !!!
    alert: extraAlert;
}

interface User {
    isLogged: Boolean;
    username: String;
    firstName: String;
    lastName: String;
    email: String;
    password: String;
    password1: String;
    password2: String;
    role: String;
    notes: any;
}

interface Alert {
    show: Boolean;
    title: String;
    userMsg: String;
    devMsg: String;
}
interface AppState {
    nav: {
        msg: String
    };
    lang: String;
    cards: Array<Card>;
    currentCard: Card;
    user: User;
    roles: Array<String>;
    alert: Alert;
    newProduct: Product;
    products: Array<Product>;
}

const appState: AppState = {
    products: [],
    nav: {
        msg: 'hi'
    },
    lang: 'ua',
    cards: <any>[],
    currentCard: <any>{
        title: '',
        description: '',
        video: 'zKOQhgWQPM4'
    },
    user: {
        isLogged: false,
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password1: '',
        password2: '',
        role: 'Guest',
        notes: null
    },
    roles: [ // <----------------- not yet implemented !!!
        'Guest',
        'Admin',
        'Owner',
        'Operator'
    ],
    alert: {
        show: false,
        title: 'About',
        userMsg: 'Some wrong or good',
        devMsg: 'Tech details'
    },
    newProduct: {
        _id: '',
        created: new Date,
        lastChange: new Date,
        productName: '',
        categories: '',
        price: 0,
        description: '',
        img: 0,
        imgs: [],
        fashionLine: '',
        model: '',
        modelType: '',
        _collection: '',
        sizes: [],
        typeOfSize: [],
        selectedSize: 0,
        color: '',
        colorProducts: [],
        selectedColor: '',
        text: '',
        views: 0,
        stars: {
            public: 0,
            private: 0,
            voutes: []
        },
        breadCrumbs: [],
        amount: 0,
        amountSizes: []
    }
};

export default appState;
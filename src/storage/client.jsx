const storageClient = {
  setData: (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  },
  getData: key => {
    return JSON.parse(localStorage.getItem(key));
  }
};

storageClient.setData('products', [
  {
    id: 1,
    name: 'Pasta',
    EAN: 626262,
    type: 'pasta',
    weight: '100',
    color: 'yellow',
    quantity:3,
    price:0,
    priceHistory: [0],
    checked: false
  },
  {
    id: 2,
    name: 'Potatoes',
    EAN:6363363,
    type: 'vegetables',
    weight: '200',
    color: 'red',
    quantity:3,
    price:20,
    priceHistory: [20],
    checked: false
  },
  {
    id: 3,
    name: 'Meat',
    EAN:646464,
    type: 'meat',
    weight: '300',
    color: 'red',
    quantity:3,
    price:30,
    priceHistory: [30],
    checked: false
  },
  {
    id: 4,
    name: 'Oil',
    EAN: 6656565,
    type: 'fat',
    weight: '400',
    color: 'yellow',
    quantity:3,
    price:40,
    priceHistory: [40],
    checked: false
  },
  {
    id: 5,
    name: 'Fish',
    EAN: 67676767,
    type: 'fish',
    weight: '200',
    color: 'grey',
    quantity:3,
    price:50,
    priceHistory: [50],
    checked: false
  },
  {
    id: 6,
    name: 'Milk',
    EAN: 68686868,
    type: 'milk',
    weight: '150',
    color: 'white',
    quantity:3,
    price:60,
    priceHistory: [60],
    checked: false
  },
  {
    id: 7,
    name: 'Butter',
    EAN: 69696969,
    type: 'fat',
    weight: '120',
    color: 'yellow',
    quantity:3,
    price:70,
    priceHistory: [70],
    checked: false
  },
  {
    id: 8,
    name: 'Eggs',
    EAN: 54545454,
    type: 'eggs',
    weight: '100',
    color: 'white',
    quantity:3,
    price:80,
    priceHistory: [80],
    checked: false
  },
  {
    id: 9,
    name: 'Legumes',
    EAN: 1313131,
    type: 'vegetables',
    weight: '200',
    color: 'green',
    quantity:3,
    price:90,
    priceHistory: [90],
    checked: false
  },
  {
    id: 10,
    name: 'Yogurt',
    EAN: 1212121,
    type: 'milk',
    weight: '200',
    color: 'white',
    quantity:3,
    price:90,
    priceHistory: [90],
    checked: false
  }
]);
storageClient.getData('products');

export default storageClient;

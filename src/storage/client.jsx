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
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 2,
    name: 'Potatoes',
    EAN: Math.floor(Math.random() * Math.floor(100000)),
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 3,
    name: 'Meat',
    EAN: Math.floor(Math.random() * Math.floor(100000)),
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 4,
    name: 'Oil',
    EAN: Math.floor(Math.random() * Math.floor(100000)),
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 5,
    name: 'Fish',
    EAN: Math.floor(Math.random() * Math.floor(100000)),
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 6,
    name: 'Milk',
    EAN: Math.floor(Math.random() * Math.floor(100000)),
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 7,
    name: 'Butter',
    EAN: Math.floor(Math.random() * Math.floor(100000)),
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 8,
    name: 'Eggs',
    EAN: Math.floor(Math.random() * Math.floor(100000)),
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 9,
    name: 'Legumes',
    EAN: Math.floor(Math.random() * Math.floor(100000)),
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 10,
    name: 'Yogurt',
    EAN: Math.floor(Math.random() * Math.floor(100000)),
    type: 'cereals',
    weight: '100',
    color: 'red',
    checked: false
  }
]);
storageClient.getData('products');

export default storageClient;

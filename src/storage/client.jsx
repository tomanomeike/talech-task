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
    checked: false
  },
  {
    id: 2,
    name: 'Potatoes',
    EAN:6363363,
    type: 'vegetables',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 3,
    name: 'Meat',
    EAN:646464,
    type: 'meat',
    weight: '100',
    color: 'red',
    checked: false
  },
  {
    id: 4,
    name: 'Oil',
    EAN: 6656565,
    type: 'fat',
    weight: '100',
    color: 'yellow',
    checked: false
  },
  {
    id: 5,
    name: 'Fish',
    EAN: 67676767,
    type: 'fish',
    weight: '100',
    color: 'grey',
    checked: false
  },
  {
    id: 6,
    name: 'Milk',
    EAN: 68686868,
    type: 'milk',
    weight: '100',
    color: 'white',
    checked: false
  },
  {
    id: 7,
    name: 'Butter',
    EAN: 69696969,
    type: 'fat',
    weight: '100',
    color: 'yellow',
    checked: false
  },
  {
    id: 8,
    name: 'Eggs',
    EAN: 54545454,
    type: 'eggs',
    weight: '100',
    color: 'white',
    checked: false
  },
  {
    id: 9,
    name: 'Legumes',
    EAN: 1313131,
    type: 'vegetables',
    weight: '100',
    color: 'green',
    checked: false
  },
  {
    id: 10,
    name: 'Yogurt',
    EAN: 1212121,
    type: 'milk',
    weight: '100',
    color: 'white',
    checked: false
  }
]);
storageClient.getData('products');

export default storageClient;

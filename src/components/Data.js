import orange_bottle_main from './img/orange-bottle-fruits.jpg';
import green_bottle_main from './img/greens-bottle-fruits.jpg';
import beetroot_bottle_main from './img/beetroot-bottle-fruit.jpg';
import strawberr_bottle_main from './img/strawberry-bottle-fruits.jpg';
import pitaya_bottle_main from './img/pitaya-bottle-fruits.jpg';
import collection_bottle_main from './img/collection-bottle-fruits.jpg';
import { v4 as uuid } from 'uuid';

const Data = [
  {
    id: uuid(),
    name: 'Orange Smoothie',
    altName: 'Green smoothie in a plastic bottle',
    ingredients: 'Orange, Carrot, Ginger',
    price: '5',
    img: orange_bottle_main,
    altImg: '',
  },
  {
    id: uuid(),
    name: 'Green Smoothie',
    altName: 'Green smoothie in a plastic bottle',
    ingredients: 'Green Apple, Celery, Cucumber',
    price: '5',
    img: green_bottle_main,
    altImg: '',
  },
  {
    id: uuid(),
    name: 'Purple Smoothie',
    altName: 'Purple smoothie in a plastic bottle',
    ingredients: 'Green Apple, Cucumber, Beetroot ',
    price: '7',
    img: beetroot_bottle_main,
    altImg: '',
  },
  {
    id: uuid(),
    name: 'Pink Smoothie',
    altName: 'Pink smoothie in a plastic bottle',
    ingredients: 'Strawberry, Raspberry',
    price: '7',
    img: strawberr_bottle_main,
    altImg: '',
  },
  {
    id: uuid(),
    name: 'Dragon Fruit Smoothie',
    altName: 'Pink smoothie in a plastic bottle',
    ingredients: 'Dragon Fruit (Pitaya)',
    price: '7',
    img: pitaya_bottle_main,
    altImg: '',
  },
  {
    id: uuid(),
    name: 'Smoothie Collection',
    altName: '6 diffrent smoothies in bottles',
    ingredients:
      'Carrot, Orange, Ginger, Green Apple, Celery, Cucumber, Raspberry, Beetroot, Strawberry, Dragon Fruit (Pitaya)',
    price: '40',
    img: collection_bottle_main,
    altImg: '',
  },
];

export default Data;

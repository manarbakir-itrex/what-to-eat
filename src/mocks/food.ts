/**
 * NOTE that if you want to update this mock you have to clean localStorage as well
 */
const FOODS_MOCK = [
  {
    id: '1',
    name: 'Cheeseburger',
    description: 'Burger with beef and cheese',
    img: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    type: 'Burger',
    tags: ['Cheese', 'Beef', 'Tomato', 'Salad', 'Pickles'],
    rating: 8.5,
    // think of "user_rating" field as of result of "left join" to restaurant model
    user_rating: 9,
  },
  {
    id: '2',
    name: 'Margherita',
    description: 'Pizza with cheese and tomatoes',
    img: 'https://images.pexels.com/photos/6940997/pexels-photo-6940997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    type: 'Pizza',
    tags: ['Cheese', 'Tomato'],
    rating: 8.3,
    // think of "user_rating" field as of result of "left join" to restaurant model
  },
  {
    id: '3',
    name: 'Chicken pizza',
    img: null,
    type: 'Pizza',
    tags: ['Cheese', 'Tomatoes', 'Chicken'],
    rating: 5.5,
    // think of "user_rating" field as of result of "left join" to restaurant model
    user_rating: 6,
  },
  {
    id: '4',
    name: 'Ramen',
    img: 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    type: 'Ramen',
    tags: ['Noodles', 'Pork', 'Chicken', 'Fish', 'Eggs', 'Salad'],
    rating: 9.4,
    // think of "user_rating" field as of result of "left join" to restaurant model
    user_rating: 10,
  },
  {
    id: '5',
    name: 'Quesadilla',
    img: null,
    type: 'Quesadilla',
    tags: ['Cheese', 'Chicken', 'Salad'],
    rating: 7.8,
    // think of "user_rating" field as of result of "left join" to restaurant model
  },
  {
    id: '6',
    name: 'Russian dumplings',
    img: 'https://images.pexels.com/photos/8601557/pexels-photo-8601557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    type: 'Dumplings',
    tags: ['Pork', 'Chicken'],
    rating: 8.2,
    // think of "user_rating" field as of result of "left join" to restaurant model
    user_rating: 7,
  },
  {
    id: '7',
    name: 'Garlic-Butter Steak',
    img: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    type: 'Steak',
    tags: ['Beef', 'Fries'],
    rating: 8.2,
    // think of "user_rating" field as of result of "left join" to restaurant model
    user_rating: 10,
  },
  {
    id: '8',
    name: 'Chicken burger',
    img: null,
    type: 'Burger',
    tags: ['Cheese', 'Chicken', 'Salad'],
    rating: 8.2,
    // think of "user_rating" field as of result of "left join" to restaurant model
    user_rating: 7,
  },
];

export default FOODS_MOCK;

export const menuItems = {
  hannaGarden: {
    id: 4,
    name: 'Hanna Garden',
    type: 'build-your-own',
    categories: [
      {
        id: 'greens',
        name: 'Greens',
        required: true,
        items: [
          { id: 'kale', name: 'Kale' },
          { id: 'romaine', name: 'Romaine lettuce' },
          { id: 'spinach', name: 'Spinach' },
          { id: 'cabbage', name: 'Purple Cabbage' },
        ],
      },
      {
        id: 'grain',
        name: 'Grain',
        required: false,
        items: [
          { id: 'chowmein', name: 'Chow mein noodles' },
          { id: 'quinoa', name: 'Quinoa' },
          { id: 'wildrice', name: 'Wild Rice' },
        ],
      },
      {
        id: 'protein',
        name: 'Protein',
        required: false,
        hasPrice: true,
        items: [
          { id: 'chicken', name: 'Grilled Chicken', price: 2.50 },
          { id: 'steak', name: 'Grilled Steak', price: 3.00 },
          { id: 'tofu', name: 'Diced Tofu', price: 2.00 },
        ],
      },
      {
        id: 'veggies',
        name: 'Veggies',
        required: false,
        items: [
          { id: 'tomatoes', name: 'Diced Tomatoes' },
          { id: 'sweetpotatoes', name: 'Sweet Potatoes' },
          { id: 'cucumber', name: 'Cucumber' },
          { id: 'bellpeppers', name: 'Bell Peppers' },
          { id: 'mushrooms', name: 'Mushrooms' },
          { id: 'edamame', name: 'Edamame' },
        ],
      },
      {
        id: 'toppings',
        name: 'Toppings',
        required: false,
        items: [
          { id: 'croutons', name: 'Croutons' },
          { id: 'cranberries', name: 'Dried Cranberries' },
        ],
      },
      {
        id: 'dressings',
        name: 'Dressings',
        required: false,
        items: [
          { id: 'balsamic', name: 'Balsamic Vinaigrette' },
          { id: 'sesame', name: 'Sesame Ginger Dressing' },
        ],
      },
    ],
  },
  streets: {
    id: 5,
    name: 'Streets',
    type: 'mixed',
    categories: [
      {
        id: 'madeToOrder',
        name: 'Made to Order',
        required: false,
        items: [
          { id: 'mac8oz', name: 'Mac & Cheese 8oz with a side', price: 7.50, swipeable: true },
          { id: 'chickenTenders', name: 'Chicken Tender Basket', price: 7.50, swipeable: true },
          { id: 'mac6oz', name: 'Entree Mac & Cheese 6oz', price: 4.50, swipeable: false },
        ],
      },
      {
        id: 'buildYourOwn',
        name: 'Build Your Own',
        required: false,
        items: [
          { id: 'smashburger', name: 'Smash Burger', price: 7.50, swipeable: true },
          { id: 'grilledwrap', name: 'Grilled Chicken Wrap', price: 7.50, swipeable: true },
          { id: 'crispywrap', name: 'Crispy Chicken Wrap', price: 7.50, swipeable: true },
          { id: 'buffalowrap', name: 'Buffalo Chicken Wrap', price: 7.50, swipeable: true },
          { id: 'grilledsandwich', name: 'Grilled Chicken Sandwich', price: 7.50, swipeable: true },
          { id: 'buffalosandwich', name: 'Buffalo Chicken Sandwich', price: 7.50, swipeable: true },
        ],
      },
      {
        id: 'toppings',
        name: 'Toppings',
        required: false,
        items: [
          { id: 'lettuce', name: 'Lettuce' },
          { id: 'tomato', name: 'Tomato' },
          { id: 'onion', name: 'Onion' },
          { id: 'pickles', name: 'Pickles' },
          { id: 'american', name: 'American Cheese' },
          { id: 'cheddar', name: 'Cheddar Cheese' },
          { id: 'provolone', name: 'Provolone Cheese' },
          { id: 'pepperjack', name: 'Pepperjack Cheese' },
        ],
      },
      {
        id: 'sauce',
        name: 'Sauce',
        required: false,
        items: [
          { id: 'ranch', name: 'Ranch' },
          { id: 'buffalo', name: 'Buffalo' },
          { id: 'honeymustard', name: 'Honey Mustard' },
          { id: 'streetssauce', name: 'Streets Sauce' },
          { id: 'sweetchili', name: 'Sweet Chili' },
          { id: 'bbq', name: 'BBQ' },
        ],
      },
      {
        id: 'sides',
        name: 'Sides',
        required: false,
        items: [
          { id: 'wafflefries', name: 'Waffle Fries' },
          { id: 'wafflechips', name: 'Waffle Chips' },
          { id: 'baggedchips', name: 'Bagged Chips', price: 1.50 },
          { id: 'cookie', name: 'Cookies', price: 3.00 },
          { id: 'upgradefam', name: 'Upgrade to Mac & Cheese', price: 2.50 },
        ],
      },
    ],
  },
};


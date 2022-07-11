const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngredients = ingredients.map(ingredient => {
  const newEl = document.createElement('li')
newEl.textContent = ingredient
  newEl.classList.add('item')
  
  return newEl;
  
})


const ulIngredients = document.querySelector('#ingredients')
ulIngredients.append(...listIngredients)









const numberCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${numberCategories.length}`);

const categoriesArray = [...numberCategories]
  .map(categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`)
  .join('\n');
console.log(categoriesArray);






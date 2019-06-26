const sort_categories = (categories) => {
  let sortedCategories = [];

  categories.forEach(category => {
    if (category.parent_id) {
      const firstChildIndex = sortedCategories.findIndex(item => item.parent_id === category.id);

      if (firstChildIndex !== -1) {
        // Child exists, put new category before child
        const indexToInsert = firstChildIndex === 0 ? 0 : firstChildIndex - 1;
        sortedCategories.splice(indexToInsert, 0, category);
      } else {
        // just put the category at the end
        sortedCategories.push(category);
      }
    } else {
      // if processing a parent category, just put it at the start of the array
      sortedCategories.unshift(category);
    }
  });

  return sortedCategories;
};

const categories = [
  {
    name: "Watches",
    id: 7,
    parent_id: 1,
  },
  {
    name: "Accessories",
    id: 1,
    parent_id: 20,
  },
  {
    name: "California Dial",
    id: 8,
    parent_id: 7,
  },
  {
    name: "Clothing",
    id: 2,
    parent_id: 20,
  },
  {
    name: "Shoes",
    id: 3,
    parent_id: 20,
  },
  {
    name: "Men",
    id: 20,
    parent_id: null,
  },
  {
    name: "Women",
    id: 21,
    parent_id: null,
  },
  {
    name: "T-Shirts",
    id: 6,
    parent_id: 4,
  },
  {
    name: "Shirts",
    id: 4,
    parent_id: 2,
  },
  {
    name: "Pants",
    id: 5,
    parent_id: 2,
  },
];

const sortedCategories = sort_categories(categories);
console.log('sortedCategories', sortedCategories);

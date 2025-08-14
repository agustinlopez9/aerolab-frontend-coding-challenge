const handleSortLow = (filteredProducts, changeFilteredProducts) => {
  var sortedProducts = [...filteredProducts];
  sortedProducts.sort((a, b) => {
    return a.cost - b.cost;
  });
  changeFilteredProducts(sortedProducts);
};

const handleSortHigh = (filteredProducts, changeFilteredProducts) => {
  var sortedProducts = [...filteredProducts];
  sortedProducts.sort((a, b) => {
    return b.cost - a.cost;
  });
  changeFilteredProducts(sortedProducts);
};

const handleSortRecent = (filteredProducts, changeFilteredProducts) => {
  let sortedProducts = [...filteredProducts];
  sortedProducts.sort((a, b) => {
    return a._id < b._id ? -1 : a._id > b._id ? 1 : 0;
  });
  changeFilteredProducts(sortedProducts);
};

const handleSort = (sortType, filteredProducts, changeFilteredProducts) => {
  switch (sortType) {
    case "recent":
      return handleSortRecent(filteredProducts, changeFilteredProducts);
    case "low":
      return handleSortLow(filteredProducts, changeFilteredProducts);
    case "high":
      return handleSortHigh(filteredProducts, changeFilteredProducts);
    default:
      return;
  }
};

const filterValues = [
  "All Products",
  "Gaming",
  "Audio",
  "Smart Home",
  "Monitors & TV",
];

const sortingValues = [
  {
    value: "recent",
    title: "Most recent",
    defaultChecked: true,
  },
  {
    value: "low",
    title: "Lowest price",
  },
  {
    value: "high",
    title: "Highest price",
  },
];

module.exports = {
  filterValues,
  sortingValues,
  handleSort,
};

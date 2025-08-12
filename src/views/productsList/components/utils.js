const handleSortLow = (
  setSorting,
  filteredProducts,
  changeFilteredProducts,
) => {
  setSorting("low");
  var sortedProducts = [...filteredProducts];
  sortedProducts.sort((a, b) => {
    return a.cost - b.cost;
  });
  changeFilteredProducts(sortedProducts);
};

const handleSortHigh = (
  setSorting,
  filteredProducts,
  changeFilteredProducts,
) => {
  setSorting("high");
  var sortedProducts = [...filteredProducts];
  sortedProducts.sort((a, b) => {
    return b.cost - a.cost;
  });
  changeFilteredProducts(sortedProducts);
};

const handleSortRecent = (
  setSorting,
  filteredProducts,
  changeFilteredProducts,
) => {
  setSorting("recent");
  let sortedProducts = [...filteredProducts];
  sortedProducts.sort((a, b) => {
    return a._id < b._id ? -1 : a._id > b._id ? 1 : 0;
  });
  changeFilteredProducts(sortedProducts);
};

const handleSort = (
  sortType,
  setSorting,
  filteredProducts,
  changeFilteredProducts,
) => {
  switch (sortType) {
    case "recent":
      return handleSortRecent(
        setSorting,
        filteredProducts,
        changeFilteredProducts,
      );
    case "low":
      return handleSortLow(
        setSorting,
        filteredProducts,
        changeFilteredProducts,
      );
    case "high":
      return handleSortHigh(
        setSorting,
        filteredProducts,
        changeFilteredProducts,
      );
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

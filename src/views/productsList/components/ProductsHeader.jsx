import { useRef, useState } from "react";
import styled from "styled-components";
import { useClickOutside } from "hooks";
import { RadioInput } from "components/common";
import { gradientBackground, palette } from "components/theme/palette";
import { MenuDropdownIcon } from "assets/Icons";
import { filterValues, sortingValues, handleSort } from "./utils";

const ProductsHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 1464px;
  margin-bottom: 2rem;
  .filter-by,
  .sort-by {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    color: ${palette.textSecondary};
    font-weight: 600;
    font-size: 1.125rem;
  }
  .sort-by {
    padding-left: 2.25rem;
    border-left: 2px solid ${palette.border};
  }
  input:checked ~ .sort-button {
    ${gradientBackground}
    span {
      -webkit-text-fill-color: #fff;
    }
  }
`;

const FilterContainer = styled.div`
  position: relative;
  margin-right: 2.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  color: ${palette.textSecondary};
  .filter-select {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 256px;
    height: 59px;
    background: ${palette.whiteBackground};
    border: 1px solid ${palette.border};
    border-radius: 1rem;
    user-select: none;
    cursor: pointer;
  }
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0px;
  height: 271px;
  width: 256px;
  border: 1px solid #dae4f2;
  border-radius: 0.5rem;
  background: #fff;
  position: absolute;
  top: 67.5px;
  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      height: 51px;
      padding: 0 1rem;
      cursor: pointer;
    }
    li:hover {
      background: #f5f9ff;
    }
  }
`;

const SortContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`;

function ProductsHeader({
  products,
  changeFilteredProducts,
  filter,
  changeFilter,
  filteredProducts,
}) {
  const [menu, setMenu] = useState(false);
  const [sorting, setSorting] = useState("recent");
  const menuRef = useRef();
  useClickOutside(menuRef, setMenu);

  const handleChangeFilter = (filterName) => {
    setMenu(false);
    changeFilter(filterName);
    if (filterName === "All Products") {
      changeFilteredProducts(products);
    } else {
      let filtered = products.filter((item) => item.category === filterName);
      changeFilteredProducts(filtered);
    }
  };

  return (
    <ProductsHeaderContainer>
      <span className="filter-by">Filter by:</span>
      <FilterContainer ref={menuRef}>
        <div className="filter-select" onClick={() => setMenu(!menu)}>
          {filter}
          <MenuDropdownIcon />
        </div>
        {menu && (
          <Filter>
            <ul>
              {filterValues.map((filterName) => (
                <li
                  key={filterName}
                  onClick={() => handleChangeFilter(filterName)}
                >
                  {filterName}
                </li>
              ))}
            </ul>
          </Filter>
        )}
      </FilterContainer>
      <span className="sort-by">Sort by:</span>
      <SortContainer>
        {sortingValues.map((sort) => (
          <RadioInput
            key={sort.value}
            id={`${sort.value}-sort`}
            name="order"
            value={sort.value}
            title={sort.title}
            currentState={sorting}
            defaultChecked={sort.defaultChecked}
            onClick={() =>
              handleSort(
                sort.value,
                setSorting,
                filteredProducts,
                changeFilteredProducts,
              )
            }
            width="165px"
            height="43px"
          />
        ))}
      </SortContainer>
    </ProductsHeaderContainer>
  );
}

export default ProductsHeader;

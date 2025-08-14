import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useUserContext } from "context";
import ProductsHeader from "./components/ProductsHeader";
import ProductItem from "./components/ProductItem";
import { SystemErrorIcon, SystemSuccessIcon } from "assets/Icons";
import { getProducts, redeemProduct } from "services/productsServices";
import { getHistory, getUser } from "services/userService";
import { palette } from "components/theme/palette";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1464px;
`;

const StyledTitle = styled.h3`
  font-weight: 900;
  font-size: 3rem;
  line-height: 80%;
  text-align: left;
  text-transform: uppercase;
  span {
    color: #176feb;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1.5rem;
  width: 100%;
`;

function ProductsList() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("All Products");
  const [filteredProducts, setFilteredProducts] = useState({});
  const { user, setUser } = useUserContext();
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(
      0,
      Object.entries(products).length,
    );
  }, [products]);

  useEffect(() => {
    async function handleGetProducts() {
      const result = await getProducts();
      setProducts(result.data);
      setFilteredProducts(result.data);
    }
    handleGetProducts();
  }, []);

  const handleRedeem = (index, productId, productName) => {
    setLoading(productId);
    itemsRef.current[index].style.opacity = "70%";
    redeemProduct(productId)
      .then(() => {
        async function handleGetHistory() {
          const result = await getHistory();
          console.log(result.data);
          const userdata = await getUser();
          setUser(userdata.data);
          toast.success(
            <p>
              <span style={{ color: palette.textPrimary }}>{productName}</span>{" "}
              redeemed successfully
            </p>,
            {
              icon: <SystemSuccessIcon />,
            },
          );
          itemsRef.current[index].style.opacity = "100%";
          setLoading(0);
        }
        handleGetHistory();
      })
      .catch((err) => {
        toast.error(<p>There was a problem with the transaction</p>, {
          icon: <SystemErrorIcon />,
        });
        itemsRef.current[index].style.opacity = "100%";
        setLoading(0);
      });
  };

  return (
    <StyledContainer id="products-list">
      <StyledTitle>
        <span>Tech</span> products
      </StyledTitle>
      <ProductsHeader
        products={products}
        changeProducts={setProducts}
        filter={filter}
        changeFilter={setFilter}
        filteredProducts={filteredProducts}
        changeFilteredProducts={setFilteredProducts}
      />
      <ProductsContainer>
        {products &&
          Object.values(filteredProducts).map((item, index) => {
            return (
              <ProductItem
                key={index}
                product={item}
                user={user}
                loading={loading}
                handleRedeem={handleRedeem}
                index={index}
                itemsRef={itemsRef}
              />
            );
          })}
      </ProductsContainer>
    </StyledContainer>
  );
}

export default ProductsList;

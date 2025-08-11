import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useInfo } from "../context/userContext";
import { getProducts, redeemProduct } from "../services/productsServices";
import ProductsSorter from "./ProductsSorter";
import { getHistory, getUser } from "../services/userService";
import { gradientBackground } from "./theme/palette";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1464px;
  margin: 10rem auto;
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
  width: 100%;
`;

const ProductCard = styled.div`
  width: 348px;
  height: 506px;
  margin: 5rem 0.5rem;
  background-color: #fff;
  .product {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 431px;
    border: 1px solid #dae4f2;
    border-radius: 1rem;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    .product-img {
      display: flex;
      height: 345px;
      justify-content: center;
      align-items: center;
    }
    .product-name {
      border-top: 1px solid #dae4f2;
      display: flex;
      align-items: center;
      padding-left: 1rem;
      text-align: left;
      height: 88px;
      color: #252f3d;
      font-weight: 600;
      p {
        font-size: 1rem;
      }
      span {
        text-transform: uppercase;
        color: #7c899c;
        font-size: 0.825rem;
      }
    }
  }
  img {
    width: 100%;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 600;
  width: 100%;
  height: 59px;
  margin: 1.5rem auto;
  border: none;
  border-radius: 1rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  ${(props) =>
    props.primary
      ? `
                color: #fff;
                ${gradientBackground}
            `
      : `
                color: #7C899C;
                background: #E6EDF7;
            `}
  img {
    width: 24px;
    margin: 0.5rem;
  }
`;

function ProductsList() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState({});
  const [filter, setFilter] = useState("All Products");
  const [filteredProducts, setFilteredProducts] = useState({});
  const { user, setUser } = useInfo();
  const itemsRef = useRef([]);
  // you can access the elements with itemsRef.current[n]

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
              <span style={{ color: "#252F3D" }}>{productName}</span> redeemed
              successfully
            </p>,
          );
          itemsRef.current[index].style.opacity = "100%";
          setLoading(0);
        }
        handleGetHistory();
      })
      .catch((err) => {
        console.log(err);
        toast.error("There was a problem with the transaction", {
          icon: (
            <img
              src={process.env.PUBLIC_URL + "assets/icons/system-error.svg"}
              alt="error-icon"
            />
          ),
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
      <ProductsSorter
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
              <ProductCard key={index}>
                <div className="product">
                  <div className="product-img">
                    <img src={item.img.hdUrl} alt={item.name} />
                  </div>
                  <div className="product-name">
                    <p>
                      {item.name}
                      <br />
                      <span>{item.category}</span>
                    </p>
                  </div>
                </div>
                <Button
                  ref={(e) => (itemsRef.current[index] = e)}
                  id={item._id}
                  primary={user && user.points > item.cost ? true : false}
                  onClick={() => handleRedeem(index, item._id, item.name)}
                >
                  {loading === item._id ? (
                    "Processing..."
                  ) : user && user.points > item.cost ? (
                    <>
                      Redeem for
                      <img
                        src={
                          process.env.PUBLIC_URL + `/assets/icons/aeropay-3.svg`
                        }
                        alt="aeropay-3"
                      />
                      {item.cost}
                    </>
                  ) : (
                    <>
                      You need
                      <img
                        src={
                          process.env.PUBLIC_URL + `/assets/icons/aeropay-4.svg`
                        }
                        alt="aeropay-4"
                      />
                      {user && user.points ? item.cost - user.points : ""}
                    </>
                  )}
                </Button>
              </ProductCard>
            );
          })}
      </ProductsContainer>
    </StyledContainer>
  );
}

export default ProductsList;

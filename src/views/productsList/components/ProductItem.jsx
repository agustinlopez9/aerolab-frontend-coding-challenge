import { AeropayFourthIcon, AeropayThirdIcon } from "assets/Icons";
import { gradientBackground, palette } from "components/theme/palette";
import styled from "styled-components";

const ProductItemContainer = styled.div`
  width: 348px;
  height: 506px;
  margin-bottom: 5rem;
  background-color: ${palette.whiteBackground};
  .product {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 431px;
    border: 1px solid ${palette.border};
    border-radius: 1rem;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    .product-img {
      display: flex;
      height: 345px;
      justify-content: center;
      align-items: center;
    }
    .product-name {
      border-top: 1px solid ${palette.border};
      display: flex;
      align-items: center;
      padding-left: 1rem;
      text-align: left;
      height: 88px;
      color: ${palette.textPrimary};
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

function ProductItem({
  product,
  user,
  loading,
  handleRedeem,
  index,
  itemsRef,
}) {
  return (
    <ProductItemContainer>
      <div className="product">
        <div className="product-img">
          <img src={product.img.hdUrl} alt={product.name} />
        </div>
        <div className="product-name">
          <p>
            {product.name}
            <br />
            <span>{product.category}</span>
          </p>
        </div>
      </div>
      <Button
        ref={(e) => (itemsRef.current[index] = e)}
        id={product._id}
        primary={user && user.points > product.cost ? true : false}
        onClick={() => handleRedeem(index, product._id, product.name)}
      >
        {loading === product._id ? (
          "Processing..."
        ) : user && user.points > product.cost ? (
          <>
            Redeem for
            <AeropayThirdIcon />
            {product.cost}
          </>
        ) : (
          <>
            You need
            <AeropayFourthIcon />
            {user && user.points ? product.cost - user.points : ""}
          </>
        )}
      </Button>
    </ProductItemContainer>
  );
}

export default ProductItem;

import http from "./httpService";

export async function getProducts() {
  return http.get("/products");
}

export async function redeemProduct(productId) {
  return http.post("/redeem", {
    productId: productId,
  });
}

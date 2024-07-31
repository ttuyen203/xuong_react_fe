import { styled } from "@mui/material/styles";
import Tagline from "../../components/Tagline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../config";

const Cart = () => {
  const [cart, setCart] = useState(null);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/carts/user/${userId}`);
        setCart(response.data);
      } catch (error) {
        console.error(
          "Error details:",
          error.response ? error.response.data : error.message
        );
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [userId]);

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(
        `${BASE_URL}/carts/user/${userId}/product/${productId}`
      );
      setCart((prevCart) => ({
        ...prevCart,
        products: prevCart.products.filter(
          (item) => item.product._id !== productId
        ),
      }));
    } catch (error) {
      console.error("Error deleting product from cart:", error);
    }
  };

  if (!cart) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <BannerContainer>
        <BannerImage
          src="https://res.cloudinary.com/dymajn3ys/image/upload/v1710956033/NNShop/banner_meeuby.png"
          alt=""
        />
        <TextBanner>
          <TitleBanner>
            <p>Cart</p>
          </TitleBanner>
          <EnglishBanner>
            <p>Home {">"} Cart</p>
          </EnglishBanner>
        </TextBanner>
      </BannerContainer>
      <Section>
        <CartList>
          <thead>
            <CartListHeader>
              <CartListHeaderCell></CartListHeaderCell>
              <CartListHeaderCell>Product</CartListHeaderCell>
              <CartListHeaderCell>Price</CartListHeaderCell>
              <CartListHeaderCell>Quantity</CartListHeaderCell>
              <CartListHeaderCell>Subtotal</CartListHeaderCell>
              <CartListHeaderCell></CartListHeaderCell>
            </CartListHeader>
          </thead>
          <tbody>
            {cart.products.map((item) => (
              <CartListRow key={item.product._id}>
                <CartListCell>
                  <CartListImage src={item.product.image} alt="Product" />
                </CartListCell>
                <CartListCell>{item.product.title}</CartListCell>
                <CartListCell>{item.product.price}</CartListCell>
                <CartListCell>
                  {item.quantity} {/* Hiển thị số lượng sản phẩm */}
                </CartListCell>
                <CartListCell>
                  {item.product.price * item.quantity}
                </CartListCell>
                <CartListCell>
                  <DeleteForeverIcon
                    onClick={() => handleDeleteProduct(item.product._id)}
                  />
                </CartListCell>
              </CartListRow>
            ))}
          </tbody>
        </CartList>

        <CartBill>
          <BillName>Cart Totals</BillName>
          <BillSubtotal>
            <BillTitle>Subtotal</BillTitle>
            <PriceSubtotal>
              {cart.products.reduce(
                (sum, item) => sum + item.product.price * item.quantity,
                0
              )}
            </PriceSubtotal>
          </BillSubtotal>
          <BillTotal>
            <BillTitle>Total</BillTitle>
            <PriceTotal>
              {cart.products.reduce(
                (sum, item) => sum + item.product.price * item.quantity,
                0
              )}
            </PriceTotal>
          </BillTotal>

          <Link to={"/check-out"}>
            <BtnCheckout>Check Out</BtnCheckout>
          </Link>
        </CartBill>
      </Section>

      <Tagline />
    </>
  );
};

// CSS
const BannerContainer = styled("div")({
  position: "relative",
  textAlign: "center",
});

const BannerImage = styled("img")({
  width: "100%",
});

const TextBanner = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const TitleBanner = styled("div")({
  fontSize: "2rem",
  fontWeight: 600,
});

const EnglishBanner = styled("div")({
  fontSize: "1.2rem",
  fontWeight: 500,
});

const Section = styled("div")({
  paddingLeft: "8rem",
  paddingRight: "8rem",
  display: "flex",
  gap: "4rem",
  marginTop: "5rem",
});

const CartList = styled("table")({
  borderSpacing: 0,
  width: "65%",
});

const CartListHeader = styled("tr")({
  backgroundColor: "#f9f1e7",
});

const CartListHeaderCell = styled("th")({
  width: "20%",
  textAlign: "left",
  padding: "10px 0",
});

const CartListRow = styled("tr")({
  marginBottom: "20px",
});

const CartListImage = styled("img")({
  width: "80%",
  backgroundColor: "#efe6d1",
  borderRadius: "10px",
});

const CartListCell = styled("td")({
  padding: "10px 0",
});

const CartBill = styled("div")({
  backgroundColor: "#f9f1e7",
  width: "30%",
  padding: "10px 20px",
  textAlign: "center",
});

const BillName = styled("p")({
  fontSize: "32px",
  fontWeight: 600,
  textAlign: "center",
  marginBottom: "40px",
});

const BillSubtotal = styled("div")({
  display: "flex",
  gap: "2rem",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
});

const BillTotal = styled("div")({
  display: "flex",
  gap: "2rem",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
});

const BillTitle = styled("p")({
  fontWeight: 500,
});

const PriceSubtotal = styled("p")({
  color: "#9f9f9f",
  fontWeight: 400,
});

const PriceTotal = styled("p")({
  color: "#b88e2f",
  fontSize: "20px",
  fontWeight: 500,
});

const BtnCheckout = styled("div")({
  border: "1px solid #000",
  padding: "10px 30px",
  width: "50%",
  borderRadius: "10px",
  marginTop: "30px",
  marginLeft: "25%",
  marginBottom: "70px",
  cursor: "pointer",
});

export default Cart;

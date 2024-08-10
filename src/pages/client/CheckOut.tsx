import { styled } from "@mui/material/styles";
import Tagline from "../../components/Tagline";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";
import { FormOrder } from "../../types/Order";
import { Bounce, toast } from "react-toastify";

interface CartProduct {
  product: {
    _id: string;
    title: string;
    image: string;
    description: string;
    price: number;
    category: string;
  };
  quantity: number;
}

const CheckOut = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartProducts: CartProduct[] = location.state?.cartProducts || [];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormOrder>();

  const onSubmit = async (data: FormOrder) => {
    const userId = localStorage.getItem("userId");
    try {
      const response = await axios.post(`${BASE_URL}/orders`, {
        user: userId,
        address: data.address,
        phone: data.phone,
        name: data.name,
        payment: "COD",
        products: cartProducts,
      });
      console.log("Order created successfully:", response.data);
      toast.success("Order placed successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      navigate("/");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error deleting product from cart:",
          error.response ? error.response.data : error.message
        );
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <>
      <BannerContainer>
        <BannerImage
          src="https://res.cloudinary.com/dymajn3ys/image/upload/v1710956033/NNShop/banner_meeuby.png"
          alt=""
        />
        <TextBanner>
          <TitleBanner>
            <p>Check Out</p>
          </TitleBanner>
          <EnglishBanner>
            <p>Home {">"} Check Out</p>
          </EnglishBanner>
        </TextBanner>
      </BannerContainer>
      <Section>
        <FormSection onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Billing Details</FormTitle>
          <FormContainer>
            <InputContainer>
              <Label>Name</Label>
              <Input {...register("name", { required: "Name is required" })} />
              {errors.name && <Error>{errors.name.message}</Error>}
            </InputContainer>

            <InputContainer>
              <Label>Phone</Label>
              <Input
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && <Error>{errors.phone.message}</Error>}
            </InputContainer>

            <InputContainer>
              <Label>Street Address</Label>
              <Input
                {...register("address", {
                  required: "Street address is required",
                })}
              />
              {errors.address && <Error>{errors.address.message}</Error>}
            </InputContainer>
          </FormContainer>
          <BtnCheckout type="submit">Place Order</BtnCheckout>
        </FormSection>

        <CartSection>
          <CartTitle>Order Summary</CartTitle>
          <CartList>
            <thead>
              <CartListHeader>
                <CartListHeaderProduct>Product</CartListHeaderProduct>
                <CartListHeaderCell>Quantity</CartListHeaderCell>
                <CartListHeaderCell>Price</CartListHeaderCell>
                <CartListHeaderCell>Total</CartListHeaderCell>
              </CartListHeader>
            </thead>
            <tbody>
              {cartProducts.map((item) => (
                <CartListRow key={item.product._id}>
                  <CartListProduct>{item.product.title}</CartListProduct>
                  <CartListCell>{item.quantity}</CartListCell>
                  <CartListCell>${item.product.price}</CartListCell>
                  <CartListCell>
                    ${item.product.price * item.quantity}
                  </CartListCell>
                </CartListRow>
              ))}
            </tbody>
          </CartList>
          <TotalContainer>
            <TotalLabel>Total:</TotalLabel>
            <TotalAmount>
              $
              {cartProducts.reduce(
                (sum, item) => sum + item.product.price * item.quantity,
                0
              )}
            </TotalAmount>
          </TotalContainer>
        </CartSection>
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

const FormSection = styled("form")({
  width: "60%",
});

const FormTitle = styled("h2")({
  marginBottom: "2rem",
  fontSize: "1.5rem",
});

const FormContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
});

const InputContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const Label = styled("label")({
  marginBottom: "0.5rem",
  fontSize: "1rem",
});

const Input = styled("input")({
  padding: "0.5rem",
  fontSize: "1rem",
  border: "1px solid #ccc",
  borderRadius: "4px",
});

const Error = styled("span")({
  color: "red",
  fontSize: "0.875rem",
  marginTop: "0.5rem",
});

const BtnCheckout = styled("button")({
  border: "none",
  padding: "10px 30px",
  borderRadius: "10px",
  marginTop: "20px",
  backgroundColor: "#000",
  color: "#fff",
  cursor: "pointer",
  fontSize: "1rem",
});

const CartSection = styled("div")({
  width: "35%",
  padding: "1rem",
  backgroundColor: "#f9f1e7",
});

const CartTitle = styled("h2")({
  marginBottom: "2rem",
  fontSize: "1.5rem",
});

const CartList = styled("table")({
  width: "100%",
  borderSpacing: 0,
});

const CartListHeader = styled("tr")({
  backgroundColor: "#f9f1e7",
});

const CartListHeaderCell = styled("th")({
  padding: "10px 0",
  textAlign: "center",
});

const CartListHeaderProduct = styled("th")({
  padding: "10px 0",
  textAlign: "left",
  width: "40%",
});

const CartListRow = styled("tr")({});

const CartListCell = styled("td")({
  padding: "10px 0",
  textAlign: "center",
});

const CartListProduct = styled("td")({
  padding: "10px 0",
  textAlign: "left",
});

const TotalContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "2rem",
});

const TotalLabel = styled("p")({
  fontSize: "1.25rem",
  fontWeight: 600,
});

const TotalAmount = styled("p")({
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "#b88e2f",
});

export default CheckOut;

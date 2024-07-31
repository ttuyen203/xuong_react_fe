import { styled } from "@mui/material/styles";
import Tagline from "../../components/Tagline";

const CheckOut = () => {
  return (
    <>
      <BannerContainer>
        <BannerImage
          src="https://res.cloudinary.com/dymajn3ys/image/upload/v1710956033/NNShop/banner_meeuby.png"
          alt=""
        />
        <TextBanner>
          <TitleBanner>
            <p>Checkout</p>
          </TitleBanner>
          <EnglishBanner>
            <p>Home {">"} Checkout</p>
          </EnglishBanner>
        </TextBanner>
      </BannerContainer>
      {/* Checkout */}
      <Section>
        <SectionTitle>Billing details</SectionTitle>
        <CheckoutSpace>
          <ShippingInfo>
            <ShippingFullname>
              <FirstName>
                <Label>First Name</Label>
                <br />
                <Input type="text" />
              </FirstName>
              <LastName>
                <Label>Last Name</Label>
                <br />
                <Input type="text" />
              </LastName>
            </ShippingFullname>
            <Label>Company Name (Optional)</Label>
            <br />
            <Input type="text" />
            <br />
            <Label>Country / Region</Label>
            <br />
            <Select>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Viet Nam">Viet Nam</option>
            </Select>
            <br />
            <Label>Street address</Label>
            <br />
            <Input type="text" />
            <br />
            <Label>Town / City</Label>
            <br />
            <Input type="text" />
            <br />
            <Label>Province</Label>
            <br />
            <Select>
              <option value="Western Province">Western Province</option>
              <option value="Viet Nam">Viet Nam</option>
            </Select>
            <br />
            <Label>ZIP Code</Label>
            <br />
            <Input type="text" />
            <br />
            <Label>Phone</Label>
            <br />
            <Input type="text" />
            <br />
            <Label>Email address</Label>
            <br />
            <Input type="email" />
            <br />
            <Input type="text" placeholder="Additional information" />
          </ShippingInfo>
          <Terms>
            <CheckoutBill>
              <CheckoutBillTitle>
                <CheckoutBillTitleText>Product</CheckoutBillTitleText>
                <CheckoutBillTitleText>Subtotal</CheckoutBillTitleText>
              </CheckoutBillTitle>
              <CheckoutBillProduct>
                <p className="text-gray">Asgaard sofa x 1</p>
                <p>25.000.000đ</p>
              </CheckoutBillProduct>
              <CheckoutBillSubtotal>
                <p>Subtotal</p>
                <p>25.000.000đ</p>
              </CheckoutBillSubtotal>
              <CheckoutBillTotal>
                <p>Total</p>
                <CheckoutTotal>50.000.000đ</CheckoutTotal>
              </CheckoutBillTotal>
            </CheckoutBill>
            <TermsContent>
              <form>
                <input type="radio" value="" checked />
                <Label>Direct Bank Transfer</Label>
                <br />
                <p className="text-gray">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
                <input type="radio" value="" />
                <Label className="text-gray">Direct Bank Transfer</Label>
                <br />
                <input type="radio" value="" />
                <Label className="text-gray">Cash On Delivery</Label>
                <br />
                <p>
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our privacy policy.
                </p>
              </form>
            </TermsContent>
            <PlaceOrder>
              <BtnPlaceOrder>Place order</BtnPlaceOrder>
            </PlaceOrder>
          </Terms>
        </CheckoutSpace>
      </Section>
      {/* Tagline */}
      <Tagline />
    </>
  );
};

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
});

const SectionTitle = styled("p")({
  fontSize: "1.8rem",
  fontWeight: 500,
  paddingTop: "2rem",
  paddingBottom: "1rem",
});

const CheckoutSpace = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "10rem",
});

const ShippingInfo = styled("form")({
  width: "50%",
});

const Terms = styled("div")({
  width: "50%",
});

const Label = styled("label")({
  fontWeight: 500,
});

const Input = styled("input")({
  marginTop: "10px",
  marginBottom: "20px",
  width: "100%",
  height: "50px",
  borderRadius: "10px",
  border: "1px solid #9f9f9f",
  "&::placeholder": {
    padding: "10px",
  },
});

const Select = styled("select")({
  marginTop: "10px",
  marginBottom: "20px",
  width: "100%",
  height: "50px",
  borderRadius: "10px",
  border: "1px solid #9f9f9f",
});

const ShippingFullname = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  gap: "2rem",
});

const FirstName = styled("div")({
  width: "100%",
});

const LastName = styled("div")({
  width: "100%",
});

const CheckoutBill = styled("div")({
  borderBottom: "1px solid #d9d9d9",
});

const CheckoutBillTitle = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "15px",
});

const CheckoutBillProduct = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "15px",
});

const CheckoutBillSubtotal = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "15px",
});

const CheckoutBillTotal = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "15px",
  marginBottom: "20px",
});

const CheckoutBillTitleText = styled("p")({
  fontSize: "24px",
  fontWeight: 500,
});

const CheckoutTotal = styled("p")({
  fontWeight: 700,
  fontSize: "24px",
  color: "#b88e2f",
});

const TermsContent = styled("div")({
  marginBottom: "20px",
});

const PlaceOrder = styled("div")({
  width: "100%",
  marginTop: "50px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
});

const BtnPlaceOrder = styled("p")({
  border: "1px solid #000",
  padding: "10px 50px",
  borderRadius: "10px",
});

export default CheckOut;

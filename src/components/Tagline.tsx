import { styled } from "@mui/system";

const TaglineSection = styled("section")({
  marginTop: "5rem",
  backgroundColor: "#faf3ea",
  padding: "80px 50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ListFeature = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
  justifyItems: "center",
});

const Feature = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
});

const FeatureImage = styled("img")({
  width: "50px",
  marginBottom: "10px",
});

const FeatureText = styled("div")({
  marginLeft: "15px",
});

const FeatureTitle = styled("div")({
  fontSize: "25px",
  fontWeight: 600,
});

const FeatureDesc = styled("div")({
  fontWeight: 500,
  fontSize: "1rem",
  opacity: 0.6,
});

const Tagline = () => {
  return (
    <TaglineSection>
      <ListFeature>
        <Feature>
          <FeatureImage
            src="https://res.cloudinary.com/dymajn3ys/image/upload/v1710956242/NNShop/Group_m49afe.svg"
            alt=""
          />
          <FeatureText>
            <FeatureTitle>High Quality</FeatureTitle>
            <FeatureDesc>crafted from top materials</FeatureDesc>
          </FeatureText>
        </Feature>
        <Feature>
          <FeatureImage
            src="https://res.cloudinary.com/dymajn3ys/image/upload/v1710956251/NNShop/guarantee_gg1ais.svg"
            alt=""
          />
          <FeatureText>
            <FeatureTitle>Warranty Protection</FeatureTitle>
            <FeatureDesc>Over 2 years</FeatureDesc>
          </FeatureText>
        </Feature>
        <Feature>
          <FeatureImage
            src="https://res.cloudinary.com/dymajn3ys/image/upload/v1710956256/NNShop/shipping_nffpum.svg"
            alt=""
          />
          <FeatureText>
            <FeatureTitle>Free Shipping</FeatureTitle>
            <FeatureDesc>Order over 150 $</FeatureDesc>
          </FeatureText>
        </Feature>
        <Feature>
          <FeatureImage
            src="https://res.cloudinary.com/dymajn3ys/image/upload/v1710956247/NNShop/customer-support_ary4kl.svg"
            alt=""
          />
          <FeatureText>
            <FeatureTitle>24 / 7 Support</FeatureTitle>
            <FeatureDesc>Dedicated support</FeatureDesc>
          </FeatureText>
        </Feature>
      </ListFeature>
    </TaglineSection>
  );
};

export default Tagline;

import { styled } from "@mui/system";

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

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage
        src="https://res.cloudinary.com/dymajn3ys/image/upload/v1710956033/NNShop/banner_meeuby.png"
        alt=""
      />
      <TextBanner>
        <TitleBanner>
          <p>Trang chủ</p>
        </TitleBanner>
        <EnglishBanner>
          <p>Home</p>
        </EnglishBanner>
      </TextBanner>
    </BannerContainer>
  );
};

export default Banner;

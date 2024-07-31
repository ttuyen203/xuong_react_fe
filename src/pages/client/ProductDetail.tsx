import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiResProDetail, Product } from "../../types/Product";
import axios from "axios";
import { BASE_URL } from "../../config";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../redux/loadingSlice";
import { AppDispatch } from "../../redux/store";
import { CircularProgress } from "@mui/material";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState<Product>();
  const [quantity, setQuantity] = useState(1); // State to manage quantity
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  useEffect(() => {
    const fetchData = () => {
      dispatch(setLoading(true));
      axios
        .get<ApiResProDetail>(`${BASE_URL}/products/${id}`)
        .then(async (response) => {
          await delay(1000);
          setData(response.data.data);
          dispatch(setLoading(false));
        })
        .catch((err) => {
          console.log(err);
          if (err.response && err.response.status === 400) {
            navigate("/product/not-found");
          }
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    };

    fetchData();
  }, [id, navigate, dispatch]);

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(prev + change, 1));
  };

  const userId = localStorage.getItem("userId");
  console.log(userId);

  const handleAddToCart = async () => {
    try {
      await axios.post(`${BASE_URL}/carts`, {
        user: userId,
        product: data?._id,
        quantity,
      });
      alert("Product added to cart successfully!");
    } catch (error) {
      // console.error(
      //   "Error details:",
      //   error.response ? error.response.data : error.message
      // );
      alert("Failed to add product to cart");
    }
  };

  if (isLoading) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <BreadcrumbContainer>
        <Typography variant="body1">Home</Typography>
        <ChevronRightIcon />
        <Typography variant="body1">Shop</Typography>
        <ChevronRightIcon />
        <Typography variant="body1">Product</Typography>
      </BreadcrumbContainer>

      {/* Detail Product */}
      <SectionContainer>
        <DetailListContainer>
          <DetailImgContainer>
            <ThumbnailContainer>
              <ThumbnailImg src="./img/thumbnail1.svg" alt="" />
              <ThumbnailImg src="./img/thumbnail2.svg" alt="" />
              <ThumbnailImg src="./img/thumbnail3.svg" alt="" />
              <ThumbnailImg src="./img/thumbnail4.svg" alt="" />
            </ThumbnailContainer>
            <div>
              <MainImg src={data?.image} alt="" />
            </div>
          </DetailImgContainer>
          <DetailInfoContainer>
            <DetailName>{data?.title}</DetailName>
            <DetailPrice>{data?.price}$</DetailPrice>
            <RatingContainer>
              <StarRoundedIcon />
              <StarRoundedIcon />
              <StarRoundedIcon />
              <StarRoundedIcon />
              <StarRoundedIcon /> |
              <Typography variant="body1">5 Customer Reviews</Typography>
            </RatingContainer>
            <DetailIntro>{data?.description}</DetailIntro>
            <SizeTitle>Size</SizeTitle>
            <SizeList>
              <SizeItem>L</SizeItem>
              <SizeItem>XL</SizeItem>
              <SizeItem>XS</SizeItem>
            </SizeList>
            <ColorTitle>Color</ColorTitle>
            <ColorList>
              <ColorItem style={{ backgroundColor: "#816dfa" }} />
              <ColorItem style={{ backgroundColor: "#000" }} />
              <ColorItem style={{ backgroundColor: "#b88e2f" }} />
            </ColorList>
            <DetailItemContainer>
              <DetailQuantity>
                <QuantityIcon onClick={() => handleQuantityChange(-1)}>
                  <RemoveCircleIcon />
                </QuantityIcon>
                {quantity}
                <QuantityIcon onClick={() => handleQuantityChange(1)}>
                  <AddCircleIcon />
                </QuantityIcon>
              </DetailQuantity>
              <DetailAction onClick={handleAddToCart}>
                <DetailActionText>Add to Cart</DetailActionText>
              </DetailAction>
              <DetailAction>
                <DetailActionText>Compare</DetailActionText>
              </DetailAction>
            </DetailItemContainer>
            <CategoryTagsContainer>
              <CategoryTagsList>
                <CategoryTagsGroup>
                  <Typography variant="body1">SKU</Typography>
                  <Typography variant="body1">Category</Typography>
                  <Typography variant="body1">Tags</Typography>
                  <Typography variant="body1">Share</Typography>
                </CategoryTagsGroup>
                <CategoryTagsGroup>
                  <Typography variant="body1">: SS001</Typography>
                  <Typography variant="body1">: </Typography>
                  <Typography variant="body1">
                    : Sofa, Chair, Home, Shop
                  </Typography>
                  <div>
                    <FacebookIcon />
                    <LinkedInIcon />
                    <TwitterIcon />
                  </div>
                </CategoryTagsGroup>
              </CategoryTagsList>
            </CategoryTagsContainer>
          </DetailInfoContainer>
        </DetailListContainer>

        {/* Description */}
        <DetailDesc>
          <DescTitle>
            <Divider orientation="horizontal" flexItem />
            <TitleText>Description</TitleText>
            <Divider orientation="horizontal" flexItem />
          </DescTitle>
          <DescriptionText>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </DescriptionText>
          <DescriptionText>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the
            loudestinfo speakers in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio which boasts a clear
            midrange and extended highs for a sound that is both articulate and
            pronounced. The analogue knobs allow you to fine tune the controls
            to your personal preferences while the guitar-influenced leather
            strap enables easy and stylish travel.
          </DescriptionText>
          <DescImgContainer>
            <DescImage src="./img/height.jpg" alt="" />
            <DescImage src="./img/height.jpg" alt="" />
          </DescImgContainer>
        </DetailDesc>
      </SectionContainer>
    </div>
  );
};

// CSS
const BreadcrumbContainer = styled("div")({
  backgroundColor: "#f9f1e7",
  padding: "2rem 5rem",
  display: "flex",
  gap: "20px",
});

const SectionContainer = styled("section")({
  paddingLeft: "8rem",
  paddingRight: "8rem",
});

const DetailListContainer = styled("section")({
  display: "flex",
  gap: "8rem",
  marginTop: "40px",
});

const DetailImgContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
});

const ThumbnailContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ThumbnailImg = styled("img")({
  backgroundColor: "#f9f1e7",
  marginBottom: "20px",
  width: "70px",
  height: "70px",
  padding: "10px 0",
  borderRadius: "10px",
});

const MainImg = styled("img")({
  width: "80%",
  backgroundColor: "#f9f1e7",
  marginLeft: "40px",
  borderRadius: "10px",
});

const DetailInfoContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const DetailName = styled("h2")({
  fontSize: "24px",
  fontWeight: "bold",
});

const DetailPrice = styled("span")({
  fontSize: "18px",
  fontWeight: "600",
});

const RatingContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "5px",
});

const DetailIntro = styled("p")({
  fontSize: "16px",
  lineHeight: "1.5",
  marginTop: "10px",
});

const SizeTitle = styled("h3")({
  fontSize: "18px",
  fontWeight: "600",
});

const SizeList = styled("div")({
  display: "flex",
  gap: "10px",
});

const SizeItem = styled("span")({
  backgroundColor: "#f0f0f0",
  padding: "10px",
  borderRadius: "5px",
});

const ColorTitle = styled("h3")({
  fontSize: "18px",
  fontWeight: "600",
  marginTop: "20px",
});

const ColorList = styled("div")({
  display: "flex",
  gap: "10px",
});

const ColorItem = styled("div")({
  width: "30px",
  height: "30px",
  borderRadius: "50%",
});

const DetailItemContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginTop: "20px",
});

const DetailQuantity = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "16px",
});

const QuantityIcon = styled("div")({
  cursor: "pointer",
});

const DetailAction = styled("button")({
  padding: "10px 20px",
  backgroundColor: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
});

const DetailActionText = styled("span")({});

const CategoryTagsContainer = styled("div")({
  marginTop: "30px",
});

const CategoryTagsList = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const CategoryTagsGroup = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const DescTitle = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginTop: "40px",
});

const TitleText = styled("span")({
  fontSize: "20px",
  fontWeight: "bold",
});

const DescriptionText = styled("p")({
  fontSize: "16px",
  lineHeight: "1.5",
  marginTop: "10px",
});

const DescImgContainer = styled("div")({
  display: "flex",
  gap: "10px",
  marginTop: "20px",
});

const DescImage = styled("img")({
  width: "50%",
  borderRadius: "10px",
});

const LoadingContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const DetailDesc = styled("div")({
  marginTop: "40px",
});

export default ProductDetail;

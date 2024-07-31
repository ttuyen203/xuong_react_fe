import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
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
// import { useLoading } from "../../context/LoadingContext";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../redux/loadingSlice";
import { AppDispatch } from "../../redux/store";
import { CircularProgress } from "@mui/material";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState<Product>();
  const navigate = useNavigate();
  // const { isLoading, setIsLoading } = useLoading();
  const dispatch: AppDispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  useEffect(() => {
    const fetchData = () => {
      // setIsLoading(true);
      dispatch(setLoading(true));
      axios
        .get<ApiResProDetail>(`${BASE_URL}/products/${id}`)
        .then(async (response) => {
          await delay(1000);
          setData(response.data.data);
          console.log(response.data.data);
          dispatch(setLoading(false));
        })
        .catch((err) => {
          console.log(err);
          if (err.response && err.response.status === 400) {
            navigate("/product/not-found");
          }
        })
        .finally(() => {
          // setIsLoading(false);
          dispatch(setLoading(false));
        });
    };

    fetchData();
  }, [id, navigate, dispatch]);

  if (isLoading) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
  }

  // if (isLoading) {
  //   return (
  //     <Box
  //       display="flex"
  //       justifyContent="center"
  //       alignItems="center"
  //       height="100vh"
  //     >
  //       <CircularProgress />
  //     </Box>
  //   );
  // }

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
                <QuantityIcon>
                  <RemoveCircleIcon />
                </QuantityIcon>
                1
                <QuantityIcon>
                  <AddCircleIcon />
                </QuantityIcon>
              </DetailQuantity>
              <DetailAction>
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

// Css
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
  width: "50%",
});

const DetailName = styled("p")({
  fontWeight: 400,
  fontSize: "42px",
});

const DetailPrice = styled("p")({
  color: "#9f9f9f",
  fontWeight: 500,
  fontSize: "24px",
});

const RatingContainer = styled("div")({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  marginTop: "1rem",
});

const DetailIntro = styled("p")({
  textAlign: "justify",
  marginTop: "1rem",
});

const SizeTitle = styled("p")({
  fontWeight: 400,
  fontSize: "14px",
  color: "#9f9f9f",
  marginBottom: "10px",
  marginTop: "10px",
});

const SizeList = styled("div")({
  display: "flex",
  gap: "15px",
  textAlign: "center",
});

const SizeItem = styled("p")({
  width: "30px",
  height: "30px",
  padding: "5px 0",
  backgroundColor: "#f9f1e7",
  borderRadius: "5px",
  fontSize: "13px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#b88e2f",
    color: "#fff",
  },
});

const ColorTitle = styled("p")({
  fontWeight: 400,
  fontSize: "14px",
  color: "#9f9f9f",
  marginBottom: "10px",
  marginTop: "10px",
});

const ColorList = styled("div")({
  display: "flex",
  gap: "15px",
  textAlign: "center",
});

const ColorItem = styled("div")({
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  cursor: "pointer",
});

const DetailItemContainer = styled("div")({
  display: "flex",
  marginTop: "20px",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "space-between",
});

const DetailQuantity = styled("div")({
  border: "1px solid #000",
  padding: "10px",
  borderRadius: "10px",
});

const QuantityIcon = styled(IconButton)({
  padding: "10px",
});

const DetailAction = styled("div")({
  border: "1px solid #000",
  padding: "10px 0",
  borderRadius: "10px",
  width: "180px",
});

const DetailActionText = styled("p")({
  margin: 0,
});

const DetailDesc = styled("div")({
  borderTop: "1px solid #d9d9d9",
  borderBottom: "1px solid #d9d9d9",
  marginTop: "50px",
});

const CategoryTagsContainer = styled("div")({
  marginTop: "40px",
  borderTop: "1px solid #d9d9d9",
});

const CategoryTagsList = styled("div")({
  marginTop: "30px",
  display: "flex",
  gap: "30px",
});

const CategoryTagsGroup = styled("div")({
  display: "flex",
  flexDirection: "column",
  fontWeight: "400",
  color: "#9f9f9f",
});

const DescTitle = styled("div")({
  marginTop: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
});

const TitleText = styled("p")({
  fontSize: "24px",
  fontWeight: 500,
  margin: 0,
  cursor: "pointer",
});

const DescriptionText = styled("p")({
  color: "#9f9f9f",
  fontWeight: 400,
  marginTop: "20px",
  textAlign: "justify",
});

const DescImgContainer = styled("div")({
  marginTop: "30px",
  marginBottom: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
});

const DescImage = styled("img")({
  width: "40%",
  backgroundColor: "rgb(249, 241, 231)",
  height: "250px",
});

const LoadingContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default ProductDetail;

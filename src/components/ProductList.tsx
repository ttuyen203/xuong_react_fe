import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  CircularProgress,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CompareIcon from "@mui/icons-material/Compare";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ApiResPro, Product } from "../types/Product";
import axios from "axios";
import { BASE_URL } from "../config";
import Swal from "sweetalert2";

interface ProductListProps {
  limit?: number;
}

const ProductList: React.FC<ProductListProps> = ({ limit }) => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<ApiResPro>(`${BASE_URL}/products`);
        setData(response.data.data);
        console.log("Data", response.data);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const displayedProducts = limit ? data.slice(0, limit) : data;

  if (isLoading) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
  }

  return (
    <Section>
      <SectionTitle>New</SectionTitle>
      <SectionContent>
        <ListProduct container spacing={2}>
          {displayedProducts?.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <CardProduct>
                <ImgProduct image={product?.image} />
                <InfoProduct>
                  <NameProduct>{product?.title}</NameProduct>
                  <DescriptionProduct>
                    {product?.description}
                  </DescriptionProduct>
                  <PriceProduct>
                    <Price>{product?.price}$</Price>
                  </PriceProduct>
                </InfoProduct>
                <Overlay>
                  <OverlayContent>
                    <Link to={`/product/${product._id}`}>
                      <AddToCartButton>View Detail</AddToCartButton>
                    </Link>
                    <AddToCartButton>Add to Cart</AddToCartButton>
                    <AdditionalOptions>
                      <IconButton color="inherit">
                        <ShareIcon />
                      </IconButton>
                      <IconButton color="inherit">
                        <CompareIcon />
                      </IconButton>
                      <IconButton color="inherit">
                        <FavoriteIcon />
                      </IconButton>
                    </AdditionalOptions>
                  </OverlayContent>
                </Overlay>
              </CardProduct>
            </Grid>
          ))}
        </ListProduct>
      </SectionContent>
    </Section>
  );
};

// CSS cho LoadingContainer
const LoadingContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Section = styled(Box)({
  paddingLeft: "8rem",
  paddingRight: "8rem",
});

const SectionTitle = styled("div")({
  fontSize: "1.8rem",
  fontWeight: 500,
  paddingTop: "2rem",
  paddingBottom: "1rem",
});

const SectionContent = styled(Box)({
  borderTop: "2px solid #000",
  paddingTop: "2rem",
  paddingBottom: "2rem",
  borderBottom: "2px solid #000",
});

const ListProduct = styled(Grid)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "20px",
});

const CardProduct = styled(Card)({
  position: "relative",
  display: "inline-block",
  backgroundColor: "#f4f5f7",
});

const ImgProduct = styled(CardMedia)({
  width: 280,
  height: 300,
});

const InfoProduct = styled(CardContent)({
  paddingLeft: "1rem",
  paddingBottom: "2rem",
});

const NameProduct = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: 600,
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  width: "200px",
  paddingTop: "8px",
  overflow: "hidden",
});

const DescriptionProduct = styled(Typography)({
  paddingTop: "8px",
  fontWeight: 500,
  fontSize: "1rem",
  opacity: 0.6,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  width: "200px",
});

const PriceProduct = styled(Box)({
  paddingTop: "12px",
  display: "flex",
  gap: "1.2rem",
});

const Price = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: 600,
});

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  opacity: 0,
  transition: "opacity 0.3s ease",
  "&:hover": {
    opacity: 1,
  },
});

const OverlayContent = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "white",
});

const AddToCartButton = styled("div")({
  backgroundColor: "#fff",
  color: "#b88e2f",
  fontSize: "1rem",
  fontWeight: 600,
  padding: "10px 20px",
  border: "none",
  cursor: "pointer",
  width: 200,
  marginBottom: "1rem",
});

const AdditionalOptions = styled(Box)({
  marginTop: "20px",
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
});

export default ProductList;

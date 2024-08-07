import { CircularProgress, styled } from "@mui/material";
import ProductList from "../../components/ProductList";
import { setLoading } from "../../redux/loadingSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ShopPage = () => {
  // Khai báo dispatch để gửi các action tới Redux store
  const dispatch: AppDispatch = useDispatch();

  // Lấy trạng thái loading từ Redux store
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  // Sử dụng useEffect để cập nhật trạng thái loading khi component được mount
  useEffect(() => {
    // Bắt đầu trạng thái loading
    dispatch(setLoading(true));

    // Dừng trạng thái loading sau
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 500);
  }, [dispatch]);

  // Nếu đang trong trạng thái loading, hiển thị vòng tròn tải
  if (isLoading) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
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
            <p>Shop</p>
          </TitleBanner>
          <EnglishBanner>
            <p>Home {">"} Shop</p>
          </EnglishBanner>
        </TextBanner>
      </BannerContainer>
      <ProductList />
    </>
  );
};

//CSS
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

const LoadingContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default ShopPage;

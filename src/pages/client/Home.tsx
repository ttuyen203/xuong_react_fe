import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Banner from "../../components/Banner";
import Shop from "../../components/Shop";
import Blog from "../../components/Blog";
import Tagline from "../../components/Tagline";
import ProductList from "../../components/ProductList";
import { setLoading } from "../../redux/loadingSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { CircularProgress, styled } from "@mui/material";

const Home: React.FC = () => {
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

  // Nếu không còn trạng thái loading, hiển thị các thành phần khác của trang
  return (
    <>
      <Banner />
      <ProductList />
      <Shop />
      <Blog />
      <Tagline />
    </>
  );
};

// CSS
const LoadingContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default Home;

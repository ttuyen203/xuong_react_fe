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
  const dispatch: AppDispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  useEffect(() => {
    dispatch(setLoading(true));

    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  }, [dispatch]);

  if (isLoading) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
  }

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

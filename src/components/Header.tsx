import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const HeaderContainer = styled("header")({
  width: "100%",
  top: 0,
  right: 0,
  display: "flex",
  justifyContent: "space-between",
  padding: "2rem",
  alignItems: "center",
});

const Logo = styled("div")({
  display: "flex",
  alignItems: "center",
  fontWeight: 800,
  fontSize: "2.1rem",
  "& img": {
    paddingRight: "5px",
  },
});

const NavMenu = styled("nav")({
  paddingLeft: "5rem",
  "& ul": {
    display: "flex",
  },
  "& a": {
    margin: "0 1.5rem",
    color: "#000",
    fontWeight: 500,
    textDecoration: "none",
    "&:hover": {
      color: "red",
    },
  },
  listStyle: "none",
});

const BtnFunction = styled("div")({
  "& a": {
    fontSize: "1.2rem",
    margin: "0 1.2rem",
    color: "black",
    fontWeight: 500,
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img
          src="https://res.cloudinary.com/dymajn3ys/image/upload/v1710956099/NNShop/logo_cihmne.png"
          alt="Logo"
        />
        <p>Furniro</p>
      </Logo>
      <NavMenu>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </NavMenu>
      <BtnFunction>
        <a href="/login">
          <PersonIcon />
        </a>
        <a href="">
          <SearchIcon />
        </a>
        <a href="">
          <FavoriteIcon />
        </a>
        <a href="/cart">
          <ShoppingCartIcon />
        </a>
      </BtnFunction>
    </HeaderContainer>
  );
};

export default Header;

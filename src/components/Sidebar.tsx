import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

// Custom styled components
const SidebarCSS = styled(Box)({
  width: "200px",
  padding: "16px",
  backgroundColor: "#f4f4f4",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const MenuItem = styled(Link)({
  display: "block",
  padding: "8px 16px",
  color: "#333",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
});

// const UserBox = styled(Box)({
//   display: "flex",
//   alignItems: "center",
//   padding: "16px",
// });

const Sidebar = () => {
  return (
    <SidebarCSS>
      <Box>
        <Box sx={{ textAlign: "center", marginBottom: "16px" }}>
          <MenuItem to={"/"}>Logo</MenuItem>
        </Box>
        <MenuItem to="/admin/dashboard">Dashboard</MenuItem>
        <MenuItem to="/admin/category/list">Categories</MenuItem>
        <MenuItem to="/admin/product/list">Products</MenuItem>
        <MenuItem to="/admin/cart">Cart</MenuItem>
        <MenuItem to="/admin/account">Account</MenuItem>
      </Box>
      {/* <UserBox>
        <Avatar alt="Eric Frusciante" src="path/to/eric-image.jpg" />
        <Box sx={{ marginLeft: "8px" }}>
          <Typography variant="body1">Eric Frusciante</Typography>
          <Typography variant="body2">eric@frusciante.com</Typography>
        </Box>
      </UserBox> */}
    </SidebarCSS>
  );
};

export default Sidebar;

import { styled } from "@mui/system";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../config";
import { useNavigate, useParams } from "react-router-dom";
import { Order } from "../../../types/Order";
import { Product } from "../../../types/Product";

const DetailOrder = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [order, setOrder] = useState<Order | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/orders/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setOrder(res.data.data);
        const productIds = res.data.data.products.map(
          (p: { product: string }) => p.product
        );
        // Fetch product details based on product IDs
        axios
          .get(`${BASE_URL}/products`, {
            params: { ids: productIds.join(",") },
          })
          .then((res) => setProducts(res.data.data))
          .catch((error) => console.error("Error fetching products:", error));
      })
      .catch((error: unknown) => {
        if (axios.isAxiosError(error)) {
          console.error(
            "Error fetching order details:",
            error.response ? error.response.data : error.message
          );
        } else {
          console.error("Unexpected error:", error);
        }
      });
  }, [id]);

  if (!order) {
    return <Typography>Đang tải dữ liệu...</Typography>;
  }

  // Tổng giá đơn hàng
  const totalAmount = order.products.reduce((total, item) => {
    const product = products.find((p) => p._id === item.product);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <>
      <MainContent>
        <OrderDetails>
          <Typography variant="h5" gutterBottom>
            Order Details
          </Typography>
          <StyledTable>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th">User</TableCell>
                  <TableCell>{order.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Address</TableCell>
                  <TableCell>{order.address}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Phone</TableCell>
                  <TableCell>{order.phone}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Payment</TableCell>
                  <TableCell>{order.payment}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </StyledTable>
        </OrderDetails>
        <CartDetails>
          <Typography variant="h5" gutterBottom>
            Cart Information
          </Typography>
          <StyledTable>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Price</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Quantity</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.products.map((item) => {
                  const product = products.find((p) => p._id === item.product);
                  return (
                    <TableRow key={item._id}>
                      <TableCell>{product?.title}</TableCell>
                      <TableCell>
                        <img
                          src={product?.image}
                          alt={product?.title}
                          width="50"
                        />
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        ${product?.price}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {item.quantity}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        ${(product?.price || 0) * item.quantity}
                      </TableCell>
                    </TableRow>
                  );
                })}
                <TableRow>
                  <TableCell colSpan={4} align="right">
                    <Typography variant="h6">Total Amount</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">${totalAmount}</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </StyledTable>
        </CartDetails>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/admin/order/list")}
          style={{ marginRight: "8px" }}
        >
          Back
        </Button>
      </MainContent>
    </>
  );
};

// CSS
const MainContent = styled(Box)({
  flexGrow: 1,
  padding: "24px",
});

const OrderDetails = styled(Box)({
  marginBottom: "24px",
});

const CartDetails = styled(Box)({
  marginBottom: "24px",
});

const StyledTable = styled(TableContainer)({
  marginTop: "16px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  overflow: "hidden",
});

export default DetailOrder;

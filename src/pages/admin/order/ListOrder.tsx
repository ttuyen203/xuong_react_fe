import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
// import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../config";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { ApiResOrder, Order } from "../../../types/Order";

const ListOrder = () => {
  const [data, setData] = useState<Order[]>([]);

  useEffect(() => {
    axios
      .get<ApiResOrder>(BASE_URL + "/orders")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.log(err);
      });
  }, []);

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(BASE_URL + "/orders/" + id).then(() => {
          Swal.fire({
            title: "Deleted!",
            icon: "success",
          }).then(() => {
            window.location.reload();
          });
        });
      }
    });
  };

  return (
    <>
      <MainContent>
        <HeaderContainer>
          <Typography variant="h5" gutterBottom>
            List Order
          </Typography>
        </HeaderContainer>
        <ProductTable>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Payment</TableCell>
                <TableCell align="center">Detail Order</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((d) => (
                <TableRow key={d._id}>
                  <TableCell>{d._id}</TableCell>
                  <TableCell>{d.name}</TableCell>
                  <TableCell>{d.address}</TableCell>
                  <TableCell>{d.phone}</TableCell>
                  <TableCell>{d.payment}</TableCell>
                  <TableCell align="center">
                    <Link to={`/admin/order/${d._id}/detail`}>
                      <IconButton color="primary">
                        <VisibilityIcon />
                      </IconButton>
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    {/* <Link to={`/admin/product/${d._id}/update`}>
                      <IconButton color="secondary">
                        <EditIcon />
                      </IconButton>
                    </Link> */}
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(d._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ProductTable>
      </MainContent>
    </>
  );
};

//CSS
const MainContent = styled(Box)({
  flexGrow: 1,
  padding: "24px",
});

const ProductTable = styled(TableContainer)({
  marginTop: "16px",
});

const HeaderContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
});

export default ListOrder;

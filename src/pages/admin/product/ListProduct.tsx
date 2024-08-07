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
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { ApiResPro, Product } from "../../../types/Product";
import axios from "axios";
import { BASE_URL } from "../../../config";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

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

const ListProduct = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get<ApiResPro>(BASE_URL + "/products")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
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
        axios.delete(BASE_URL + "/products/" + id).then(() => {
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
            List Product
          </Typography>
          <Link to={"/admin/product/add"}>
            <Button variant="contained" color="success">
              Add +
            </Button>
          </Link>
        </HeaderContainer>
        <ProductTable>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Show</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((d) => (
                <TableRow key={d._id}>
                  <TableCell>{d._id}</TableCell>
                  <TableCell>{d.title}</TableCell>
                  <TableCell>
                    <img
                      src={d.image}
                      alt={d.title}
                      style={{ maxWidth: "120px" }}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      maxWidth: "200px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {d.description}
                  </TableCell>
                  <TableCell align="center">${d.price}</TableCell>
                  <TableCell align="center">{d.category.name}</TableCell>
                  <TableCell align="center">{d.show ? "✓" : "✗"}</TableCell>
                  <TableCell align="center">
                    <Link to={`/admin/product/${d._id}/update`}>
                      <IconButton color="secondary">
                        <EditIcon />
                      </IconButton>
                    </Link>
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

export default ListProduct;

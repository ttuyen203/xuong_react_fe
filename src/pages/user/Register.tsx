import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { User } from "../../types/User";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../config";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const navigate = useNavigate();

  const onSubmit = async (data: User) => {
    try {
      const res = await axios.post(BASE_URL + "/auth/register", data);
      toast.success("Đăng ký thành công! Bạn có thể đăng nhập ngay.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log(res);
      navigate("/login");
    } catch (err) {
      toast.error("Đã xảy ra lỗi! Vui lòng kiểm tra lại thông tin đăng ký.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.error(err);
    }
  };

  return (
    <RegisterSpace>
      <RegisterContainer>
        <FormRegister onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Register</FormTitle>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput
            id="email"
            type="email"
            variant="outlined"
            placeholder="Nhập email của bạn"
            {...register("email", {
              required: "* Vui lòng nhập email",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "* Vui lòng nhập email hợp lệ",
              },
            })}
          />
          {errors.email && <FieldErr>{errors.email.message}</FieldErr>}

          <FormLabel htmlFor="password">Password:</FormLabel>
          <FormInput
            id="password"
            type="password"
            variant="outlined"
            placeholder="Nhập mật khẩu của bạn"
            {...register("password", {
              required: "* Vui lòng nhập mật khẩu",
              minLength: {
                value: 6,
                message: "* Mật khẩu phải có ít nhất 6 ký tự",
              },
            })}
          />
          {errors.password && <FieldErr>{errors.password.message}</FieldErr>}

          <BtnSubmit>
            <SubmitButton type="submit">Register</SubmitButton>
          </BtnSubmit>
        </FormRegister>
      </RegisterContainer>
    </RegisterSpace>
  );
};

//css
const RegisterSpace = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
});

const RegisterContainer = styled("div")({
  width: "40%",
  padding: "2rem", // added padding for better spacing
  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)", // added shadow for better visual
  borderRadius: "8px", // rounded corners
  backgroundColor: "#fff", // white background
});

const FormRegister = styled("form")({});

const FormTitle = styled("p")({
  color: "#b88e2f",
  fontSize: "30px",
  fontWeight: 700,
  paddingBottom: "20px",
  textAlign: "center",
});

const FormLabel = styled("label")({
  fontWeight: 500,
  fontSize: "18px",
  color: "#b88e2f",
  textAlign: "left",
  paddingBottom: "10px",
  display: "block",
});

const FormInput = styled(TextField)({
  width: "100%",
  borderRadius: "15px",
  marginBottom: "10px",
  "& .MuiInputBase-root": {
    height: "40px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "15px",
    },
  },
});

const FieldErr = styled("div")({
  color: "red",
  fontWeight: "500",
  marginTop: "5px",
  marginBottom: "10px", // consistent spacing
});

const BtnSubmit = styled("div")({
  width: "100%",
  textAlign: "center",
});

const SubmitButton = styled(Button)({
  backgroundColor: "#f9f1e7",
  color: "#000",
  fontWeight: 700,
  fontSize: "15px",
  border: "none",
  padding: "10px 30px",
  marginTop: "20px",
  borderRadius: "8px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#e0d7cc", // darker shade on hover
  },
  "&:active": {
    backgroundColor: "#c8beb3", // even darker shade on active
  },
});

export default Register;

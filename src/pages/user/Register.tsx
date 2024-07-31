import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { useForm } from "react-hook-form";
import { User } from "../../types/User";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const LoginSpace = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
});

const LoginContainer = styled("div")({
  width: "40%",
  padding: "2rem", // added padding for better spacing
  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)", // added shadow for better visual
  borderRadius: "8px", // rounded corners
  backgroundColor: "#fff", // white background
});

const BtnBack = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
});

const BackIcon = styled("div")({
  height: "25px",
  width: "25px",
  backgroundColor: "#000",
  color: "#fff",
  padding: "0 1px",
  borderRadius: "2px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const FormLogin = styled("form")({});

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

const SocialLogin = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  marginTop: "20px",
  textAlign: "center",
  alignItems: "center",
});

const SocialBtn = styled("div")(({ theme }) => ({
  padding: "10px 20px",
  fontWeight: 700,
  borderRadius: "15px",
  color: theme.palette.common.white,
  cursor: "pointer",
  "&:hover": {
    opacity: 0.8, // add hover effect
  },
}));

const SocialFb = styled(SocialBtn)({
  backgroundColor: "#0171d3",
});

const SocialGg = styled(SocialBtn)({
  backgroundColor: "#fff",
  color: "#000",
  border: "1px solid #000",
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const navigate = useNavigate();

  const onSubmit = async (data: User) => {
    try {
      const res = await axios.post("http://localhost:3000/auth/register", data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Đăng ký thành công",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(res);
      navigate("/login");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Đã xảy ra lỗi!",
        text: "Vui lòng kiểm tra lại Email và Password",
      });
      console.error(err);
    }
  };

  return (
    <LoginSpace>
      <LoginContainer>
        <BtnBack onClick={() => navigate("/")}>
          <BackIcon>
            <CloseSharpIcon />
          </BackIcon>
        </BtnBack>

        <FormLogin onSubmit={handleSubmit(onSubmit)}>
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
        </FormLogin>

        <SocialLogin>
          <SocialFb>Facebook</SocialFb>
          <SocialGg>Google</SocialGg>
        </SocialLogin>
      </LoginContainer>
    </LoginSpace>
  );
};

export default Register;

"use client";
import { formAntd } from "@/Common/FormAntd";
import { Form } from "antd";
import Image from "next/image";
import LogoLogin from "../login/assets/logologin.png";
import AuthServices, { RequestLogin } from "@/services/Auth/AuthService";
import { useRouter } from "next/navigation";
import "../login/styles.css";
import { toast } from "react-toastify";
const Register = () => {
  const router = useRouter();
  const onFinish = async (values: any) => {
    if (values.password !== values.confirmPassword) {
      toast.error("Mật khẩu không trùng khớp");
      return;
    }
    try {
      const { data } = await AuthServices.register(values);
      console.log(data?.status, "res");
      if (data?.status === "success") {
        toast.success("Đăng ký thành công");
        router.push("/login");
      } else {
        toast.error("Đăng ký thất bại");
      }
    } catch (error) {
      toast.error("Đăng ký thất bại");
    }
  };
  return (
    <div id="login-form" className="cps-container">
      <div className="cps-login__image">
        <Image src={LogoLogin} height={100} width={100} alt="manisd" />
        <h1>Đăng ký với</h1>
      </div>
      <Form onFinish={onFinish}>
        {inputRegister.map((item, index) => (
          <formAntd.InputAntd
            key={index}
            label={item.label}
            name={item.name}
            plaholder={item?.plaholder}
          />
        ))}
        <button className="btn-form__submit is-fullwidth button__login">
          Đăng ký
        </button>
        <div className="login-question is-flex is-justify-content-center">
          <p className="login-question__text">Bạn đã có tài khoản?</p>
          <a href="/login" className="button__go-login">
            Đăng nhập ngay
          </a>
        </div>
      </Form>
    </div>
  );
};

export default Register;
const inputRegister = [
  {
    label: "Họ tên (*)",
    plaholder: "Nhập họ và tên",
    name: "name",
  },
  {
    label: "Số điện thoại (*)",
    plaholder: "Nhập số điện thoại",
    name: "phone",
  },
  {
    label: "Email ",
    plaholder: "Nhập email",
    name: "mail",
  },
  {
    label: "Mật khẩu (*)",
    plaholder: "Nhập mật khẩu",
    name: "password",
  },
  {
    label: "Xác nhận mật khẩu (*)",
    plaholder: "Nhập lại mật khẩu",
    name: "confirmPassword",
  },
];

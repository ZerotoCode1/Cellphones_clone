"use client";
import { formAntd } from "@/Common/FormAntd";
import AuthServices, { RequestLogin } from "@/services/Auth/AuthService";
import type { FormProps } from "antd";
import { Form } from "antd";
import Image from "next/image";
import { toast } from "react-toastify";
import LogoLogin from "./assets/logologin.png";
import "./styles.css";
const Login = () => {
  const onFinish: FormProps<RequestLogin>["onFinish"] = async (values) => {
    try {
      const res = await AuthServices.login(values);
      if (res) {
        toast.success("Đăng nhập thành công");
        if (res.data) {
          localStorage.setItem("token", res.data.accessToken);
          localStorage.setItem("refreshToken", res.data.refreshToken);
          localStorage.setItem("mail", values.mail);
        }
        console.log(res.data, "fsfdsfd");
      } else {
        toast.error("Đăng nhập thất bại");
      }
    } catch (error) {
      toast.error("Đăng nhập thất bại");
    }
  };

  const onFinishFailed: FormProps<RequestLogin>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div id="login-form" className="cps-container">
      <div className="cps-login__image">
        <Image src={LogoLogin} height={100} width={100} alt="" />
        <h1>Đăng nhập với</h1>
      </div>
      <Form onFinish={onFinish}>
        <formAntd.InputAntd
          label="Tài khoản"
          plaholder="Tài khoản"
          name="mail"
        />
        <formAntd.InputAntd
          label="Mật khẩu"
          plaholder="Mật khẩu"
          name="password"
        />
        <button className="btn-form__submit is-fullwidth button__login">
          Đăng nhập
        </button>
        <div className="login-question is-flex is-justify-content-center">
          <p className="login-question__text">Bạn chưa có tài khoản?</p>
          <a href="/register" className="link button__go-register">
            Đăng ký ngay
          </a>
        </div>
      </Form>
    </div>
  );
};

export default Login;

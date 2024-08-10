"use client";
import React from "react";
import Image from "next/image";
import { Button, Form, Input } from "antd";
import type { FormProps } from "antd";
import AuthServices, { RequestLogin } from "@/services/Auth/AuthService";
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
        <Form.Item name="mail">
          <div className="box-input-form">
            <Input className="custom-input" placeholder="Tài khoản" />
            <div className="box-input__line"></div>
            <label className="custom-label">Tài khoản</label>
          </div>
        </Form.Item>
        <Form.Item name="password">
          <div className="box-input-form">
            <Input className="custom-input" placeholder="Mật khẩu" />
            <div className="box-input__line"></div>
            <label className="custom-label">Mật khẩu</label>
          </div>
        </Form.Item>
        <button className="btn-form__submit is-fullwidth button__login">
          Đăng nhập
        </button>
      </Form>
    </div>
  );
};

export default Login;

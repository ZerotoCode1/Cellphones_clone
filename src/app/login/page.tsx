"use client";
import React from "react";
import Image from "next/image";
import { Button, Form, Input } from "antd";
import type { FormProps } from "antd";
import AuthServices, { RequestLogin } from "@/services/Auth/AuthService";
import { toast } from "react-toastify";

const Login = () => {
  const onFinish: FormProps<RequestLogin>["onFinish"] = async (values) => {
    try {
      const res = await AuthServices.login(values);
      if (res) {
        toast.success("Đăng nhập thành công");
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
    <div className="flex justify-center flex-col items-center">
      <Image
        src="https://account.cellphones.com.vn/_nuxt/img/Shipper_CPS3.77d4065.png"
        alt="account"
        height={100}
        width={100}
      />
      <p>Đăng nhập với</p>
      <div className="flex gap-8">
        <div className="flex gap-3">
          <Image
            src={
              "https://account.cellphones.com.vn/_nuxt/img/image45.93ceca6.png"
            }
            height={24}
            width={24}
            alt="Google"
          />
          <p>Google</p>
        </div>
        <div className="flex gap-3">
          <Image
            src={
              "https://account.cellphones.com.vn/_nuxt/img/Logo-Zalo-Arc.a36365b.png"
            }
            height={24}
            width={24}
            alt="Zalo"
          />
          <p>Zalo</p>
        </div>
      </div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<RequestLogin>
          name="mail"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            className="custom-input"
            style={{
              border: "none",
              borderBottom: "1px solid #ccc",
              backgroundColor: "transparent",
              borderRadius: 0,
            }}
          />
        </Form.Item>

        <Form.Item<RequestLogin>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;

"use client";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { Form, Input } from "antd";
import { formAntd } from "@/Common/FormAntd";
import AuthServices, { RequestLogin } from "@/services/Auth/AuthService";
import servicesInstance from "@/Lib/Request/Services";
import { rootRequest } from "@/services/RootReques/RootRequest";
import { toast } from "react-toastify";

const OrderSystem = () => {
  const [form] = Form.useForm();
  const [dataUser, setDataUser] = useState<any>();
  const fetchData = async () => {
    const user = JSON.parse(localStorage.getItem("user") ?? "");
    const res = await AuthServices.getPropFile({ _id: user.userId });
    if (res?.data) {
      setDataUser(res.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(dataUser, "fsdfsdfsdfds");
  useEffect(() => {
    if (dataUser) {
      form.setFieldsValue({
        name: dataUser.name,
        mail: dataUser.mail,
        phone: dataUser.phone,
        province: dataUser.province,
        district: dataUser.district,
        address: dataUser.address,
      });
    }
  }, [dataUser, form]);
  console.log(form.getFieldValue("name"), "fsdfsdfsd");
  const onSubmit = async (value: any) => {
    console.log(value);
    value._id = dataUser._id;
    try {
      const res = await servicesInstance.put(rootRequest.PROFILE, value);
      if (res?.data) {
        toast.success("Thay đổi thông tin thành công");
      }
    } catch (error) {
      toast.error("Thay đổi thông tin thất bại");
    }
  };
  return (
    <div className="container-systeminfor">
      <div className="max-w-[800px] mx-auto">
        {dataUser && (
          <Form form={form} onFinish={onSubmit}>
            <div className="flex flex-col gap-y-5">
              <formAntd.InputAntd
                label="Họ và tên"
                name={"name"}
                plaholder="Nhập họ và tên"
                defaultValue={dataUser?.name}
              />
              <formAntd.InputAntd
                label="Số điện thoại"
                name={"phone"}
                plaholder="Nhập số điện thoại"
                defaultValue={dataUser?.phone}
              />
              <formAntd.InputAntd
                label="Mail"
                name={"mail"}
                plaholder="Nhập mail"
                defaultValue={dataUser?.mail}
              />
              <formAntd.InputAntd
                label="Họ và tên"
                name={"name"}
                plaholder="Chọn Tỉnh/ Thành phố"
                defaultValue={dataUser?.name}
              />
              <formAntd.InputAntd
                label="Nhập địa chỉ"
                name={"address"}
                plaholder="Nhập địa chỉ"
                defaultValue={dataUser?.address ?? ""}
              />
              <formAntd.InputAntd
                label="Đổi mật khẩu"
                name={"password"}
                plaholder="Nhập mật khẩu"
              />
            </div>
            <div className="btn-change-user">
              <button type="submit" className=" btn-form__submit ">
                Thay đổi tài khoản
              </button>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
};

export default OrderSystem;

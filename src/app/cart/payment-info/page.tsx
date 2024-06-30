"use client";
import React, { use, useEffect, useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import CartItem from "../Components/CartItem";
import { useStoreCartPriview } from "@/Lib/Store/StorecartPriview";
import InforPayment from "./Children/InforPayment";
import { conVertPrice } from "@/Components/Contant/convertdata";
import { Form, Formik } from "formik";

const enum TabsKey {
  Info = "Info",
  Payment = "Payment",
}
const PaymentInfo = () => {
  const [tab, setTab] = useState(TabsKey.Info);
  useEffect(() => {
    return () => {};
  }, [tab]);

  const onChange = (key: string) => {
    setTab(key as TabsKey);
  };
  const onSubmit = (values: any) => {};
  return (
    <div>
      <Formik initialValues={{}} onSubmit={onSubmit}>
        {(props) => {
          const { handleChange } = props;
          const items: TabsProps["items"] = [
            {
              key: TabsKey.Info,
              label: "1. Thong tin",
              children: <InforPayment handleChange={handleChange} />,
            },
            {
              key: TabsKey.Payment,
              label: "2. Thanh toan",
              children: "Pane 2",
            },
          ];
          console.log(props.values, "fsfsfsd");
          return (
            <Form>
              <Tabs
                defaultActiveKey={TabsKey.Info}
                items={items.map((item) => ({
                  ...item,
                  label: (
                    <span
                      className={
                        item.key === tab ? "color-default" : "text-[#919EAB]"
                      }
                      style={{
                        padding: "0 80px",
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      {item.label}
                    </span>
                  ),
                }))}
                onChange={onChange}
                centered
              />
              <div
                className="bg-[#FFFFFF] max-h-[120px] min-h-[120px] fixed bottom-0 w-full z-10 min-w-[370px] max-w-[600px]"
                style={{
                  border: "1px solid rgba(145, 158, 171, .239)",
                  boxShadow: "0 -4px 20px -1px rgba(40, 124, 234, .15)",
                  borderTopRightRadius: "5px",
                  borderTopLeftRadius: "5px",
                  padding: "10px 10px 20px",
                }}
              >
                <div className="flex justify-between">
                  <span className="font-semibold">Tông tien tam tinh:</span>
                  <span className="color-default font-bold">
                    {conVertPrice(12000000)}
                  </span>
                </div>
                <button
                  type="submit"
                  className="bg-[#D70018] w-full mt-2 text-white rounded-[5px]"
                  style={{ padding: ".375rem .75rem" }}
                >
                  Thanh toán
                </button>
                {tab === TabsKey.Payment && (
                  <p className="text-[#4070F4] text-center w-full mt-[5px]">
                    Kiểm tra danh sách sản phẩm
                  </p>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default PaymentInfo;

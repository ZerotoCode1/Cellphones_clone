"use client";
import { conVertPrice } from "@/Components/Contant/convertdata";
import { useStoreCartPriview } from "@/Lib/Store/StorecartPriview";
import type { TabsProps } from "antd";
import { Tabs } from "antd";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import InforPayment from "./Children/InforPayment";
import Payment from "./Children/Payment";
import { useRouter, useSearchParams } from "next/navigation";
const enum TabsKey {
  Info = "Info",
  Payment = "Payment",
}
const PaymentInfo = () => {
  const toTalPrice = useStoreCartPriview((state) => state.totalPrice);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [tab, setTab] = useState(searchParams.get("tab"));
  useEffect(() => {
    return () => {
      useStoreCartPriview.persist.rehydrate();
    };
  }, [tab]);

  const onChange = (key: string) => {
    router.push(`${`/cart/payment-info`}?tab=${key}`);
    setTab(key as TabsKey);
  };
  const onSubmit = (values: any) => {};
  return (
    <div className="payment-tab">
      <Formik initialValues={{}} onSubmit={onSubmit}>
        {(props) => {
          const { handleChange, values } = props;
          const items: TabsProps["items"] = [
            {
              key: TabsKey.Info,
              label: "1. Thong tin",
              children: <InforPayment handleChange={handleChange} />,
            },
            {
              key: TabsKey.Payment,
              label: "2. Thanh toan",
              children: <Payment />,
            },
          ];
          return (
            <Form>
              <Tabs
                activeKey={tab ?? TabsKey.Info}
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
                  <span className="font-semibold">Tổng tiền tạm tính:</span>
                  <span className="color-default font-bold">
                    {conVertPrice(toTalPrice)}
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

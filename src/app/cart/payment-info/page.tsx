"use client";
import { conVertPrice } from "@/Components/Contant/convertdata";
import { useStoreCartPriview } from "@/Lib/Store/StorecartPriview";
import PaymentServices from "@/services/Payment/PaymentService";
import type { TabsProps } from "antd";
import { Form, Tabs } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import InforPayment from "./Children/InforPayment";
import Payment from "./Children/Payment";
import { info } from "console";
const enum TabsKey {
  Info = "Info",
  Payment = "Payment",
}
const PaymentInfo = () => {
  const toTalPrice = useStoreCartPriview((state) => state.totalPrice);
  const listCartPriview = useStoreCartPriview((state) => state.lisProDuct);

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
  const onSubmit = async (values: any) => {
    console.log(values, "values");
    const data = { ...values };
    if (tab === TabsKey.Info) {
      setTab(TabsKey.Payment);
      localStorage.setItem("infoPayment", JSON.stringify(data));
    } else {
      const inforPayment = JSON.parse(
        localStorage.getItem("infoPayment") ?? ""
      );
      const paymentMetod = JSON.parse(localStorage.getItem("payment") ?? "");

      const body = {
        method: paymentMetod?.path,
        name: inforPayment.recipientName,
        amount: toTalPrice,
        item: JSON.stringify(listCartPriview),
        informationShip: JSON.stringify(inforPayment),
      };
      try {
        const response = await PaymentServices.paymentDynamic(body);
        if (response && response?.data) {
          window.location.href = response?.data.order_url;
        }
      } catch (error) {}
    }
  };
  const handleChange = (e: any) => {};
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
  const [form] = Form.useForm();
  form.getFieldsError();
  console.log(form.getFieldsError(), "fsdfsdfsdf");
  form.validateFields(["recipientName"]);
  return (
    <div className="payment-tab">
      <Suspense fallback={<div>Loading...</div>}>
        <Form onFinish={onSubmit} form={form}>
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
      </Suspense>
    </div>
  );
};

export default PaymentInfo;

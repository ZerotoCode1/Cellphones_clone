"use client";
import { useStoreCartPriview } from "@/Lib/Store/StorecartPriview";
import { Field, useFormikContext, FormikValues } from "formik";
import { useEffect, useState } from "react";
import CartItem from "../../Components/CartItem";
import { Checkbox, Tabs, TabsProps } from "antd";
import { CommonForm } from "@/Common/Form";
import TabInforItems from "./components/TabInforItems";
import InforAtStore from "./components/InforAtStore";
import InforDelivery from "./components/InforDelivery";
import { BASE_ROUTER } from "@/Components/Contant/apiUrl";

interface InforPaymentProps {
  handleChange: any;
}
const InforPayment = (prop: InforPaymentProps) => {
  const { handleChange } = prop;
  const cartList = useStoreCartPriview((state) => state.lisProDuct);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);
  const { values } = useFormikContext<FormikValues>();
  const { email } = values;
  useEffect(() => {
    useStoreCartPriview.persist.rehydrate();
    console.log("fsdfsdsdf", cartList);
    // if (cartList.length === 0) {
    //   window.location.href = BASE_ROUTER.CART;
    // }
  }, [cartList.length]);
  const handleSowMore = () => {
    setShowMore(!showMore);
  };

  const onChangeChecked = () => {
    setIsChecked(!isChecked);
  };

  const items: TabsProps["items"] = [
    {
      key: TabsKey.atStore,
      label: <TabInforItems label="Nhận tại cửa hàng" isCheck={!isChecked} />,
      children: <InforAtStore />,
      style: { padding: "0 20px 20px 20px" },
    },
    {
      key: TabsKey.delivery,
      label: <TabInforItems label="Giao hàng tận nơi" isCheck={isChecked} />,
      children: <InforDelivery />,
      style: { padding: "0 20px 20px 20px" },
    },
  ];

  return (
    <div className="mb-10">
      <div className=" bg-[#fff] rounded-[10px] mb-10 transition-all duration-500 ease-in-out">
        <div
          className={`${
            showMore ? "max-h-full" : "max-h-[170px]"
          } overflow-hidden rounded-[10px] relative `}
        >
          {cartList.map((cartItem, index) => (
            <CartItem
              id={cartItem.id}
              img={cartItem.img}
              quantity={cartItem.quantity}
              price={cartItem.price}
              salePrice={cartItem.salePrice}
              titleProduct={cartItem.titleProduct}
              key={index}
              noneCheck
            />
          ))}
        </div>
        <p
          className=" text-center py-3 w-full text-[#637381] underline cursor-pointer"
          onClick={handleSowMore}
        >
          {showMore ? "thu gọn" : "và sản phẩm khác"}
        </p>
      </div>
      <div>
        <p>Thông tin khách hàng</p>
        <div className="p-5 component-box min-h-[148px]">
          <div className="flex justify-between">
            <span className="text-[16px] text-[#0e2431] font-semibold">
              Quang Phan
            </span>
            <span>0868896711</span>
          </div>
          <div>
            <Field
              component={CommonForm.InpurFiled}
              name="email"
              label="Email"
              placeholder="Email"
            />
            <p className="text-[10px] text-[#919eab] mt-1 mb-[25px]">
              (*) Hóa đơn VAT sẽ được gửi qua email này
            </p>
            {email && (
              <Field
                component={CommonForm.ChecBoxfield}
                name="getnotiMail"
                label="Gửi hóa đơn VAT qua email"
              />
            )}
          </div>
        </div>
      </div>
      <div>
        <p>Thông tin nhận hàng</p>
        <div className="component-box min-h-[274px]">
          <Tabs
            items={items}
            centered
            className="w-full customTabInfor"
            onChange={onChangeChecked}
          />
        </div>
      </div>
    </div>
  );
};
const enum TabsKey {
  delivery = "delivery",
  atStore = "atStore",
}

export default InforPayment;

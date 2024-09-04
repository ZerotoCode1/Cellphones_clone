"use client";
import { useStoreCartPriview } from "@/Lib/Store/StorecartPriview";
import { Tabs, TabsProps } from "antd";
import { useEffect, useState } from "react";
import CartItem from "../../Components/CartItem";
import InforAtStore from "./components/InforAtStore";
import InforDelivery from "./components/InforDelivery";
import TabInforItems from "./components/TabInforItems";
import { formAntd } from "@/Common/FormAntd";

interface InforPaymentProps {
  handleChange: any;
}
const InforPayment = (prop: InforPaymentProps) => {
  const { handleChange } = prop;
  const cartList = useStoreCartPriview((state) => state.lisProDuct);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);
  useEffect(() => {
    useStoreCartPriview.persist.rehydrate();
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
  console.log(isChecked, "isChecked");

  const items: TabsProps["items"] = [
    {
      key: TabsKey.atStore,
      label: <TabInforItems label="Nhận tại cửa hàng" isCheck={!isChecked} />,
      children: <InforAtStore active={!isChecked} />,
      style: { padding: "0 20px 20px 20px" },
    },
    {
      key: TabsKey.delivery,
      label: <TabInforItems label="Giao hàng tận nơi" isCheck={isChecked} />,
      children: <InforDelivery active={isChecked} />,
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
        <p className="text-[#212b36] text-[16px] font-medium mb-[10px] uppercase text-left">
          Thông tin khách hàng
        </p>
        <div className="p-5 component-box min-h-[148px]">
          <div className="flex justify-between">
            <span className="text-[16px] text-[#0e2431] font-semibold">
              Quang Phan
            </span>
            <span>0868896711</span>
          </div>
          <div className="text-left">
            <formAntd.InputAntd
              label="Email"
              name="mail"
              plaholder="Nhập email"
              validate={{
                required: true,
                message: "Vui lòng nhập email!",
              }}
            />
            <p className="text-[10px] text-[#919eab] mt-1 mb-[25px]">
              (*) Hóa đơn VAT sẽ được gửi qua email này
            </p>
            {/* <formAntd.InputAntd label="" name="mail" plaholder="" /> */}
          </div>
        </div>
      </div>
      <div className="mt-[30px]">
        <p className="text-[#212b36] text-[16px] font-medium mb-[10px] uppercase text-left">
          Thông tin nhận hàng
        </p>
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

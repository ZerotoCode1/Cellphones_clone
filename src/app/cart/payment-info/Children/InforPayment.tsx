"use client";
import { useStoreCartPriview } from "@/Lib/Store/StorecartPriview";
import { useEffect, useState } from "react";
import CartItem from "../../Components/CartItem";
import { Field } from "formik";
import { Input } from "antd";
import InpurFiled from "@/Common/Form/Children/InpurFiled";
import { CommonForm } from "@/Common/Form";
interface InforPaymentProps {
  handleChange: any;
}
const InforPayment = (prop: InforPaymentProps) => {
  const { handleChange } = prop;
  const cartList = useStoreCartPriview((state) => state.lisProDuct);
  const [showMore, setShowMore] = useState<boolean>(false);
  useEffect(() => {
    useStoreCartPriview.persist.rehydrate();
  }, []);
  const handleSowMore = () => {
    setShowMore(!showMore);
  };
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
        <div
          className="p-5 bg-white rounded-[10px] h-[194px] w-full"
          style={{ border: "1px solid rgba(145, 158, 171, .239)" }}
        >
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default InforPayment;

import React from "react";
import { CommonForm } from "@/Common/Form";
import { OptionSlectField } from "@/Interface/interfaceForm";
import { Field } from "formik";
const InforDelivery = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-[33px] pb-[15px]">
        <Field
          component={CommonForm.SlectField}
          name="city"
          options={mocOptions}
          placeholder="Nhập tên người nhận"
        />
        <Field
          component={CommonForm.SlectField}
          name="ward"
          options={mocOptions}
          placeholder="Số điện thoại người nhận"
        />
        <Field
          component={CommonForm.SlectField}
          name="ward"
          options={mocOptions}
          placeholder="Chọn tình/ thành phố"
        />
        <Field
          component={CommonForm.SlectField}
          name="ward"
          options={mocOptions}
          placeholder="Chọn quận huyện"
        />
        <Field
          component={CommonForm.SlectField}
          name="ward"
          options={mocOptions}
          placeholder="Chọn phường xã"
        />
        <Field
          component={CommonForm.InpurFiled}
          name="note"
          options={mocOptions}
          placeholder="Nhập địa chỉ"
        />
      </div>
      <div className="pt-[18px]">
        <Field
          component={CommonForm.InpurFiled}
          name="note"
          options={mocOptions}
          placeholder="Ghi chú khác (nếu có)"
        />
      </div>
    </div>
  );
};

export default InforDelivery;
const mocOptions: OptionSlectField[] = [
  {
    value: 1,
    label: "Phú Thọ",
  },
  {
    value: 2,
    label: "Hà Nội",
  },
  {
    value: 3,
    label: "Hải Phòng",
  },
];

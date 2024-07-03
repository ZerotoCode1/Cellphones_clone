import { CommonForm } from "@/Common/Form";
import { OptionSlectField } from "@/Interface/interfaceForm";
import { Field } from "formik";
import React from "react";

const InforAtStore = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 pb-[15px]">
        <Field
          component={CommonForm.SlectField}
          name="city"
          options={mocOptions}
          placeholder="Chọn tỉnh thành phố"
        />
        <Field
          component={CommonForm.SlectField}
          name="ward"
          options={mocOptions}
          placeholder="Chọn quận huyện"
        />
      </div>
      <div className="pt-[18px] pb-[15px]">
        <Field
          component={CommonForm.SlectField}
          name="shop"
          options={mocOptions}
          placeholder="Chọn địa chỉ cửa hàng"
        />
      </div>
      <div className="pt-[18px]">
        <Field
          component={CommonForm.InpurFiled}
          name="note"
          options={mocOptions}
          placeholder="Ghi chú khác nếu có"
        />
      </div>
    </div>
  );
};

export default InforAtStore;

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

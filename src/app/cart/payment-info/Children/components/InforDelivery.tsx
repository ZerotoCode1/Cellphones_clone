import React from "react";
import { CommonForm } from "@/Common/Form";
import { OptionSlectField } from "@/Interface/interfaceForm";
import { Field } from "formik";
import { formAntd } from "@/Common/FormAntd";
interface InforDeliveryProps {
  active: boolean;
}
const InforDelivery = (props: InforDeliveryProps) => {
  const { active } = props;
  console.log(active, "active");
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-[23px] pb-[15px] text-left">
        <formAntd.InputAntd
          label="Tên người nhận"
          name="recipientName"
          plaholder="Nhập tên người nhận"
          validate={{
            required: active,
            message: "Vui long không bỏ trống tên người nhận hàng!",
          }}
        />
        <formAntd.InputAntd
          label="Số điện thoại"
          name="phone"
          plaholder="Số điện thoại người nhận"
          validate={{
            required: active,
            message: "Vui lòng không bỏ trống số điện thoại!",
          }}
        />
        <formAntd.SelectAntd
          options={mocOptions}
          plaholder="Chọn tỉnh thành"
          name="province"
          validate={{
            required: active,
            message: "Vui lòng chọn Tỉnh/ Thành phố!",
          }}
        />
        <formAntd.SelectAntd
          options={mocOptions}
          plaholder="Chọn Quận Huyện"
          name="district"
          validate={{
            required: active,
            message: "Vui lòng chọn Quận Huyện!",
          }}
        />
        <formAntd.SelectAntd
          options={mocOptions}
          plaholder="Chọn Xã Phường"
          name="ward"
          validate={{
            required: active,
            message: "Vui lòng chọn Xã phường!",
          }}
        />
        <formAntd.InputAntd
          label="Địa chỉ"
          name="address"
          plaholder="Nhập địa chỉ"
          validate={{
            required: active,
            message: "Vui lòng nhập địa chỉ chi tiết",
          }}
        />
      </div>
      <div className="pt-[18px] text-left">
        <formAntd.InputAntd
          label="Ghi chú"
          name="note"
          plaholder="Ghi chú khác nếu có"
        />
      </div>
    </div>
  );
};

export default InforDelivery;
const mocOptions: OptionSlectField[] = [
  {
    value: "Phú Thọ",
    label: "Phú Thọ",
  },
  {
    value: "Phú Thọ ",
    label: "Hà Nội",
  },
  {
    value: "Phú Thọ ",
    label: "Hải Phòng",
  },
];

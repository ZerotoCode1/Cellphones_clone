import { CommonForm } from "@/Common/Form";
import { OptionSlectField } from "@/Interface/interfaceForm";
import { Field } from "formik";
import React from "react";
import { formAntd } from "@/Common/FormAntd";
interface InforAtStoreProps {
  active: boolean;
}
const InforAtStore = (props: InforAtStoreProps) => {
  const { active } = props;
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 pb-[15px]">
        <formAntd.SelectAntd
          options={mocOptions}
          plaholder="Chọn Tỉnh/ Thành phố"
          name="province"
          validate={{
            required: active,
            message: "Vui lòng chọn Tỉnh/ Thành phố!",
          }}
        />
        <formAntd.SelectAntd
          options={mocOptions}
          plaholder="Chọn Quận huyện"
          name="district"
          validate={{
            required: active,
            message: "Vui lòng chọn Quận Huyện!",
          }}
        />
      </div>
      <div className="pt-[18px] pb-[15px]">
        <formAntd.SelectAntd
          options={mocOptions}
          plaholder="Chọn cửa hàng"
          name="addressStore"
          validate={{
            required: active,
            message: "Vui lòng chọn cửa hàng!",
          }}
        />
      </div>
      <div className="pt-[18px]">
        <formAntd.InputAntd
          label="Gi chú"
          name="note"
          plaholder="Ghi chú khác nếu có"
        />
      </div>
    </div>
  );
};

export default InforAtStore;

const mocOptions: OptionSlectField[] = [
  {
    value: "Phú Thọ",
    label: "Phú Thọ",
  },
  {
    value: "Hà Nội",
    label: "Hà Nội",
  },
  {
    value: "Hải Phòng",
    label: "Hải Phòng",
  },
];

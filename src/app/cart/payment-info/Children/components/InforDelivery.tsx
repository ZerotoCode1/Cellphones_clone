import React, { useEffect, useState } from "react";
import { CommonForm } from "@/Common/Form";
import { OptionSlectField } from "@/Interface/interfaceForm";
import { Field } from "formik";
import { formAntd } from "@/Common/FormAntd";
import axios from "axios";
interface InforDeliveryProps {
  active: boolean;
}
export interface Option {
  label: string;
  value: string | number;
}
const InforDelivery = (props: InforDeliveryProps) => {
  const { active } = props;
  const [listProvinces, setListProvinces] = useState<Option[]>();
  const [district, setDistrict] = useState<Option[]>();

  const dataDefalue = JSON.parse(localStorage.getItem("user") ?? "");

  const fetchData = async () => {
    try {
      const res = await axios.post(
        "https://apigami.viettel.vn/mvt-api/myviettel.php/omiGetAreaByParentCode?parent_code="
      );
      if (res?.data?.data) {
        const listProvincesData = res?.data?.data.map(
          (item: any): Option => ({
            label: item?.name,
            value: item?.code,
          })
        );
        setListProvinces(listProvincesData);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  const getDistrict = async (provinceCode: any) => {
    const res = await axios.post(
      `https://apigami.viettel.vn/mvt-api/myviettel.php/omiGetAreaByParentCode?parent_code=${provinceCode}`
    );
    console.log(res?.data?.data);
    if (res?.data?.data) {
      const district = res?.data?.data?.map((item: any): Option => {
        return {
          label: item?.name,
          value: item?.code,
        };
      });
      setDistrict(district);
    }
  };

  const handlechange = async (value: string) => {
    getDistrict(value);
  };
  useEffect(() => {
    if (active) {
      localStorage.setItem("typeShip", "home");
    }
  }, [active]);
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
          defaultValue={dataDefalue?.name}
        />
        <formAntd.InputAntd
          label="Số điện thoại"
          name="phone"
          plaholder="Số điện thoại người nhận"
          validate={{
            required: active,
            message: "Vui lòng không bỏ trống số điện thoại!",
          }}
          defaultValue={dataDefalue?.phone}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-[23px] pb-[15px] text-left">
        <formAntd.SelectAntd
          name="province"
          options={listProvinces ?? []}
          plaholder="Chọn Tỉnh/ Thành phố"
          onChnge={handlechange}
          validate={{
            required: active,
            message: "Vui lòng chọn tỉnh thành phố",
          }}
        />
        <formAntd.SelectAntd
          name="district"
          options={district ?? []}
          plaholder="Chọn Quận/ Huyện"
          validate={{
            required: active,
            message: "Vui lòng nhập Quận Huyện",
          }}
          // onChnge={handlechangeDistict}
        />
      </div>
      <formAntd.InputAntd
        label="Địa chỉ"
        name="address"
        plaholder="Nhập địa chỉ"
        // validate={{
        //   required: active,
        //   message: "Vui lòng nhập địa chỉ chi tiết",
        // }}
        defaultValue={dataDefalue?.address}
      />
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

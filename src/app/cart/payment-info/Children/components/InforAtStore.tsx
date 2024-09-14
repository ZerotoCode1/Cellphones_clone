"use client";
import { CommonForm } from "@/Common/Form";
import { OptionSlectField } from "@/Interface/interfaceForm";
import { Field } from "formik";
import React, { useEffect, useState } from "react";
import { formAntd } from "@/Common/FormAntd";
import axios from "axios";
import servicesInstance from "@/Lib/Request/Services";
import { useRouter } from "next/navigation";
interface InforAtStoreProps {
  active: boolean;
}
export interface Option {
  label: string;
  value: string | number;
}
const InforAtStore = (props: InforAtStoreProps) => {
  const { active } = props;
  const router = useRouter();
  const [listProvinces, setListProvinces] = useState<Option[]>();
  const [district, setDistrict] = useState<Option[]>();
  const [idProvinces, setIdProvince] = useState<string>();
  const [listStore, setListStore] = useState<any>();
  const [address, setAddress] = useState<string>();
  const [dataStore, setDataStore] = useState<any>();
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
    setIdProvince(value);
  };
  const handlechangeDistict = async (value: string) => {
    try {
      const res = await servicesInstance.get(
        `getShopLocation?province=${idProvinces}&district=${value}`
      );
      if (res?.data?.data) {
        const lisProvin = res.data.data.map((data: any) => ({
          label: data?.nameShop,
          value: data?.nameShop,
        }));
        setDataStore(res?.data?.data);
        setListStore(lisProvin);
      }
    } catch (error) {}
  };
  const handleChooseAddress = (value: string) => {
    if (dataStore) {
      const data = dataStore.find(
        (store: any) => store?.nameShop === value
      )?.location;
      console.log(data);
      setAddress(data);
    }
  };
  useEffect(() => {
    if (active) {
      localStorage.setItem("typeShip", "store");
    }
  }, [active]);
  return (
    <div>
      <div className="pt-[18px] pb-[15px]">
        <div className="grid grid-cols-2 gap-x-3 gap-y-[23px] pb-[15px] text-left">
          <formAntd.SelectAntd
            name="province"
            options={listProvinces ?? []}
            plaholder="Chọn Tỉnh/ Thành phố"
            onChnge={handlechange}
          />
          <formAntd.SelectAntd
            name="district"
            options={district ?? []}
            plaholder="Chọn Quận/ Huyện"
            onChnge={handlechangeDistict}
          />
        </div>
        <formAntd.SelectAntd
          name="addressStore"
          options={listStore ?? []}
          plaholder="Chọn cửa hàng"
          onChnge={handleChooseAddress}
          validate={{
            required: active,
            message: "Vui long không b�� trống cửa hàng!",
          }}
        />
        <a
          className="text-[blue] text-left cursor-pointer"
          href="http://localhost:3000/shopLocation"
          target="blank"
        >
          {address}
        </a>
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

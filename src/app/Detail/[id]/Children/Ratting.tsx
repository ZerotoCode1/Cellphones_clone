import { Avatar, Rate } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
const Ratting = () => {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <Avatar
          size={50}
          icon={<UserOutlined />}
          src={
            "https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/452929873_505312828679907_7938665184643238205_n.jpg?stp=dst-jpg_s600x600&_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGcEtQtLPl_US4gqMPvmffOelIFB9JWuE56UgUH0la4Tjzy9A69WpH0NDq2fXOmh_4FRY-cZvE5M1V6e7gQrR_L&_nc_ohc=k0gVTyqqmNsQ7kNvgFfO_T1&_nc_ht=scontent.fhan19-1.fna&oh=00_AYBbmp5JcNEdzf6gcMdgD8Hw8S2FmVl3VMJTNDTR992xJg&oe=66ABCE96"
          }
        />
        <div className="flex gap-4">
          <p>Quang Phan</p>
          <p>11/10/2002</p>
        </div>
      </div>
      <div className="ml-[65px]">
        <div className="flex gap-4 mb-2">
          <Rate disabled defaultValue={5} style={{ fontSize: "14px" }} />
        </div>
        <p className="text-left">fsdjkfkjsdgfkjgsdjkfgjksdgfjsd</p>
      </div>
    </div>
  );
};

export default Ratting;

import { Col, Row } from "antd";
import React from "react";
interface PropCardSeo {
  id: number;
}
const CardSeo = (prop: PropCardSeo) => {
  const { id } = prop;
  console.log("id", id);
  return (
    <div className="w-[100vh]">
      <Row gutter={36}>
        {mocData?.[id]?.map((item, index) => (
          <>
            <Col key={index} span={6}>
              <div className="text-[#343a40] font-bold text-[16px]">
                {item.title}
              </div>
              <ul>
                {item.listItem.map((list, index) => (
                  <li
                    key={index}
                    className="text-[#343a40] font-semibold text-[14px] hover:text-[#e91e18]"
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
};

export default CardSeo;

const mocData: { [key: number]: { title: string; listItem: string[] }[] } = {
  1: [
    {
      title: "Điện thoại",
      listItem: ["OPPO", "XiaoMi", "SamSung"],
    },
    {
      title: "Laptop",
      listItem: ["Asus", "Lenovo", "Dell"],
    },
    {
      title: "Phụ kiện điện thoại",
      listItem: ["tai nghe", "sạc", "chuột"],
    },
    {
      title: "Đồ gia dụng",
      listItem: ["Máy sấy", "Đèn", "Màn hình"],
    },
  ],
  2: [
    {
      title: "Máy tính bảng",
      listItem: ["Apple", "Redmi", "SamSung", "Realme"],
    },
    {
      title: "Tivi",
      listItem: ["Asus", "Lenovo", "Dell"],
    },
    {
      title: "Đồ gia dụng",
      listItem: ["tai nghe", "sạc", "chuột"],
    },
    // {
    //   title: "Phụ kiện lap top",
    //   listItem: ["Máy sấy", "Đèn", "Màn hình"],
    // },
  ],
};

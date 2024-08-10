import React, { useState } from "react";
import Image from "next/image";
import { Form, Rate, UploadFile } from "antd";
import TextArea from "antd/es/input/TextArea";
import { CommonForm } from "@/Common/Form";
import ProductServices, {
  RequestRateProduct,
} from "@/services/Products/Getproduct";
interface Props {
  productId: string;
  nameProduct: string;
}
const RattingModal = (props: Props) => {
  const { productId, nameProduct } = props;
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const handleSubmit = async (values: any) => {
    const formData = new FormData();
    values.productId = productId;
    values.userId = "66afaf16beb9fc86e2762b45";
    values.image = fileList[0]?.originFileObj;
    if (values.rating === undefined) {
      values.rating = 5;
    }
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    try {
      const res = await ProductServices.rateProduct(formData);
    } catch (err) {}
  };
  return (
    <Form onFinish={handleSubmit}>
      <div className="min-h-[] p-4 relative">
        <div className="flex gap-4 items-center">
          <Image
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:100:100/q:90/plain/https://cellphones.com.vn/media/wysiwyg/cps-ant.png"
            alt=""
            height={90}
            width={90}
          />
          <p>{nameProduct}</p>
        </div>
        <p>Đánh giá chung</p>
        <Form.Item name={"rating"}>
          <Rate
            defaultValue={5}
            style={{ fontSize: "30px", width: "100%" }}
            className="flex justify-around"
            tooltips={desc}
            allowClear={false}
          />
        </Form.Item>
        <Form.Item
          name={"comment"}
          rules={[
            { required: true, message: "Vui lòng nhập nội dung đánh giá" },
          ]}
        >
          <TextArea
            rows={10}
            placeholder="Xin mời để lại câu hỏi của bạn"
            maxLength={6}
            className="p-4 min-h-[200px] max-h-[40vh]"
          />
        </Form.Item>
        <Form.Item className="mb-[100px] mt-[30px]">
          <CommonForm.UploadAntd
            fileList={fileList}
            setFileList={setFileList}
          />
        </Form.Item>
        <div className="container-btn">
          <button type="submit" className="btn-primary">
            đánh giá
          </button>
        </div>
      </div>
    </Form>
  );
};

export default RattingModal;
const desc = ["Rất Tệ", "Tệ", "Bình thường", "Tốt", "Tuyệt vời"];

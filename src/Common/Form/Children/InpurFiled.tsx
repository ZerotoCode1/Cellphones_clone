import { Input } from "antd";
import { FieldInputProps, FormikProps } from "formik";
import React from "react";
interface InpurFiledProps {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  label?: string;
  placeholder?: string;
}
const InpurFiled = (prop: InpurFiledProps) => {
  const { field, form, label, placeholder } = prop;
  const { name } = field;
  const { handleChange } = form;
  console.log(form, "fsfd");
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <Input
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        style={{
          borderBottom: "1px solid #ccc", // Border-bottom mặc định
          borderRadius: "0", // Xóa bo góc nếu cần
          padding: "0", // Xóa padding nếu cần
          backgroundImage: "linear-gradient(to left, #007bff, #007bff )", // Gradient màu xanh từ trái sang phải
          backgroundSize: "0% 2px", // Kích thước ban đầu của gradient là 0
          backgroundRepeat: "no-repeat", // Không lặp lại gradient
          transition: "background-size 0.3s ease", // Hiệu ứng chuyển đổi kích thước gradient
        }}
        onFocus={(e) => (e.target.style.borderBottomColor = "#007bff")} // Khi focus, thay đổi kích thước gradient để màu xanh từ trái sang phải
        onBlur={(e) => (e.target.style.borderBottomColor = "#ccc")} // Khi blur, đưa kích thước gradient về 0 để màu xanh biến mất
        variant="borderless"
      />
    </div>
  );
};

export default InpurFiled;

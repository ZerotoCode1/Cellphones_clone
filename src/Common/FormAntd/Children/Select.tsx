import { OptionSlectField } from "@/Interface/interfaceForm";
import { Form, Select } from "antd";
import React from "react";
import "../formcustomstyle.css";
interface SelectAntdProps {
  options: OptionSlectField[];
  plaholder: string;
  name: string;
  validate?: any;
  onChnge?: any;
}
const SelectAntd = (props: SelectAntdProps) => {
  const { options, plaholder, name, validate, onChnge } = props;
  return (
    <Form.Item name={name} rules={[validate]}>
      <Select
        onChange={onChnge}
        className="custom-select"
        showSearch
        placeholder={plaholder}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={options}
      />
    </Form.Item>
  );
};

export default SelectAntd;

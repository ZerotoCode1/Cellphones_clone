import { Form, Input } from "antd";
import React from "react";

interface InputAntdProps {
  plaholder: string;
  label: string;
  name: string;
  validate?: any;
  defaultValue?: any;
}

const InputAntd = (props: InputAntdProps) => {
  const { plaholder, label, name, validate, defaultValue } = props;
  return (
    <Form.Item name={name} rules={[validate]}>
      <div className="box-input-form">
        <Input
          className="custom-input"
          placeholder={plaholder}
          defaultValue={defaultValue ?? ""}
        />
        <div className="box-input__line"></div>
        <label className="custom-label" style={{ textAlign: "left" }}>
          {label}
        </label>
      </div>
    </Form.Item>
  );
};

export default InputAntd;

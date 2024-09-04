import { Form, Input } from "antd";
import React from "react";

interface InputAntdProps {
  plaholder: string;
  label: string;
  name: string;
  validate?: any;
}

const InputAntd = (props: InputAntdProps) => {
  const { plaholder, label, name, validate } = props;
  return (
    <Form.Item name={name} rules={[validate]}>
      <div className="box-input-form">
        <Input className="custom-input" placeholder={plaholder} />
        <div className="box-input__line"></div>
        <label className="custom-label">{label}</label>
      </div>
    </Form.Item>
  );
};

export default InputAntd;

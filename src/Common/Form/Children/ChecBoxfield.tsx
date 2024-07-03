import { Checkbox } from "antd";
import { FieldInputProps, FormikProps } from "formik";
import React from "react";
interface InpurFiledProps {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  label?: string;
}
const ChecBoxfield = (prop: InpurFiledProps) => {
  const { field, form, label } = prop;
  const { handleChange } = form;
  const { name } = field;
  return (
    <Checkbox name={name} onChange={handleChange}>
      {label}
    </Checkbox>
  );
};

export default ChecBoxfield;

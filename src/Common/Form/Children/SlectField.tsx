import React, { useState } from "react";
import { Select } from "antd";
import { OptionSlectField } from "@/Interface/interfaceForm";
import { SourceIcon } from "@/Components/Iconsvg";
import { FieldInputProps, FormikProps } from "formik";
interface Props {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  options: OptionSlectField[];
  placeholder?: string;
}
const SlectField = (prop: Props) => {
  const { options, placeholder, field, form } = prop;
  const { name } = field;
  const { setFieldValue, values } = form;
  console.log(values, "jfhfghfghgf");
  const handleChangeSelect = (value: any) => {
    console.log(value, "valuefdsfds");
    setFieldValue(name, value);
  };
  return (
    <Select
      allowClear={{ clearIcon: <SourceIcon.CloseFiledValue /> }}
      value={values[name]}
      onChange={handleChangeSelect}
      variant="borderless"
      showSearch
      style={{ width: 200 }}
      placeholder={placeholder ?? "Chọn"}
      optionFilterProp="label"
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      options={options}
      className="custom-select"
      suffixIcon={<SourceIcon.DownSelect />}
    />
  );
};

export default SlectField;

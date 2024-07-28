import React, { useState } from "react";
import { Button, Modal } from "antd";
interface PropsModal {
  open: boolean;
  onOk?: () => void;
  confirmLoading?: boolean;
  onCancel?: () => void;
  title: string;
  children: React.ReactNode;
  width?: number;
  footer?: React.ReactNode;
  className?: string;
}
const ModalCommon = (props: PropsModal) => {
  const {
    open,
    onOk,
    confirmLoading,
    onCancel,
    title,
    children,
    width,
    footer,
    className,
  } = props;

  return (
    <>
      <Modal
        className={className}
        width={width}
        title={title}
        open={open}
        onOk={onOk}
        confirmLoading={confirmLoading}
        onCancel={onCancel}
        onClose={onCancel}
        footer={footer ? footer : []}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalCommon;

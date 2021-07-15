import React from "react";
import Modal from "./Modal";

export default {
  title: "Atomic/Modal",
  component: Modal,
};

const Template = (args) => <Modal {...args} />

export const Basic = Template.bind({});
Basic.args = {
  isOpen: true,
  onClickBg: undefined,
  closeIcon: true,
  onClickIcon: undefined,
  width: "",
  header: "header",
  content: "content",
  footer: "footer",
  bgStyle: {
    position: "relative",
    width: "100%",
    height: "500px"
  },
  modalStyle: {
    position: "absolute",
    fontFamily: "Saira, 'Nunito Sans'"
  }
};
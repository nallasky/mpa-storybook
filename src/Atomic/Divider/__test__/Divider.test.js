import React from 'react';
import Divider from "../Divider";
import { mount } from "enzyme";

describe("Divider test", () => {
  it("matches snapshot (initialProp)", () => {
    const wrapper = mount(<Divider />);
    expect(wrapper).toMatchSnapshot();
  });

  it ("matches snapshot (black color)", () => {
    const wrapper = mount(<Divider color="black" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("matches snapshot (dot type)", () => {
    const wrapper = mount(<Divider type="dot" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("matches snapshot (solid type)", () => {
    const wrapper = mount(<Divider type="solid" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("matches snapshot (change width)", () => {
    const wrapper = mount(<Divider width="400px" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("matches snapshot (change height)", () => {
    const wrapper = mount(<Divider height="1rem" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("matches snapshot (custom style)", () => {
    const wrapper = mount(<Divider style={{ borderColor: "white" }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
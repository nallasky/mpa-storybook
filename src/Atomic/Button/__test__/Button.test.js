import React from 'react';
import Button from '../Button';
import { mount } from "enzyme";

describe('Button test', () => {
  it('matches snapshot (initialProp)', () => {
    const wrapper = mount(<Button>Test</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (green theme)', () => {
    const wrapper = mount(<Button theme="green">Test</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (orange theme)', () => {
    const wrapper = mount(<Button theme="orange">Test</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (white theme)', () => {
    const wrapper = mount(<Button theme="white">Test</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (md size)', () => {
    const wrapper = mount(<Button size="md">Test</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (lg size)', () => {
    const wrapper = mount(<Button size="lg">Test</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (disabled)', () => {
    const wrapper = mount(<Button disabled>Test</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (change width)', () => {
    const wrapper = mount(<Button width="30rem">Test</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot (icon only)', () => {
    const wrapper = mount(<Button iconOnly>Test</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('check onClick function', () => {
    const clickFunc = jest.fn();
    const wrapper = mount(<Button onClick={clickFunc}>Test</Button>);
    expect(clickFunc).not.toHaveBeenCalled();

    wrapper.find('button').simulate('click');
    expect(clickFunc).toHaveBeenCalledTimes(1);
  });
});
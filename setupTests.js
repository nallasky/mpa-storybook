import "regenerator-runtime/runtime";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import enableHooks from "jest-react-hooks-shallow";

window.URL.createObjectURL = () => {};
enableHooks(jest);
Enzyme.configure({ adapter: new Adapter() });
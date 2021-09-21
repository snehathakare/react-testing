import React from "react";
import { configure, shallow } from "enzyme";
import Counter from "./Counter";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("State Hook test using Enzyme", function () {
  it("should initialize count with 0", function () {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('[id="count-display"]').text()).toBe("0");
  });
  it("should increment count when increment button is clicked", function () {
    const wrapper = shallow(<Counter />);
    wrapper.find('[id="increment-btn"]').props().onClick();
    expect(wrapper.find('[id="count-display"]').text()).toBe("1");
  });
});

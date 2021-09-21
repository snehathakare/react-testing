import React from "react";
import { configure, mount, shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import { Fetch } from "./Fetch";
import "regenerator-runtime/runtime";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const waitForComponentToPaint = async (wrapper) => {
  await act(async () => {
    await new Promise(setImmediate);
    wrapper.update();
  });
};

it("data fetch testing", async function () {
  const wrapper = mount(<Fetch />);
  console.log(wrapper);
  await waitForComponentToPaint(wrapper);
  expect(wrapper.movies[0].id).toHaveLength(1);
});

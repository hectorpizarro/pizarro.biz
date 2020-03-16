import React from "react";
import { shallow } from "enzyme";
import About from "./about";

it("renders without crashing", () => {
  const node = shallow(<About />);
  expect(node).not.toBeNull();
});

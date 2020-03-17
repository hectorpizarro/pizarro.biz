import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import Skills, { StyledSlidedown } from "./skills";
import AppService from "../../shared/appService";

describe("<Skills />", () => {
  afterEach(sinon.restore); // Restore the default sandbox here

  it("Renders without crashing", () => {
    const node = shallow(<Skills />);
    expect(node).not.toBeNull();
  });

  it("Contains 3 <SlideDown /> components", () => {
    const wrapper = shallow(<Skills />);
    const found = wrapper.find(StyledSlidedown);
    expect(found).toHaveLength(3);
  });

  it("First <SlideDown /> component is the only one active", () => {
    const wrapper = shallow(<Skills />);
    const openStates = [];
    wrapper.findWhere(node => {
      if (node.type() === StyledSlidedown) {
        openStates.push(!node.getElement().props.closed);
      }
    });
    expect(openStates).toEqual([true, false, false]);
  });
  it("Simulate click on Novice and check Novice section is the only one open", async () => {
    const openStates = [];
    const fake = sinon.fake.returns("novice");
    sinon.replace(AppService, "getClickId", fake);

    const wrapper = shallow(<Skills />);
    wrapper.find("[data-id='novice']").simulate("click");
    expect(fake.callCount).toEqual(1);
    wrapper.findWhere(node => {
      if (node.type() === StyledSlidedown) {
        openStates.push(!node.getElement().props.closed);
      }
    });
    // wait 1 sec for state to propagate
    setTimeout(() => {
      expect(openStates).toEqual([false, false, true]);
    }, 1000);
  });
});

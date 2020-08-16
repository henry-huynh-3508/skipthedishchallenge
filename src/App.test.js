import React from "react";
import App from "./App";
import { mountm, shallow } from "enzyme";

describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test("renders App", () => {
    expect(wrapper.find("div").hasClass("App")).toBe(true);
  });
});

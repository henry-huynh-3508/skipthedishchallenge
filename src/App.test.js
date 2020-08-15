import React from "react";
import App from "./App";
import { mount } from "enzyme";

describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  test("renders App", () => {
    expect(wrapper.find("div").hasClass("App")).toBe(true);
  });
});

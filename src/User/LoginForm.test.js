import React from "react";
import LoginForm from "./LoginForm";
import { createShallow } from "@material-ui/core/test-utils";
import { TextField } from "@material-ui/core";
describe("LoginForm Unit Testing", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoginForm />);
  });
  it("renders username text", () => {
    expect(wrapper.find(TextField).debug()).toContain("User name");
  });
  it("renders password text", () => {
    expect(wrapper.find(TextField).debug()).toContain("Password");
  });
});

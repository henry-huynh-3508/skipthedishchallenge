import { isValidPassword, isValidUsername } from "./validationHelper";
describe("Counter Testing", () => {
  it("isValids invalid usernames", () => {
    expect(isValidUsername("12345")).toBe(false);
    expect(
      isValidUsername("123456789012345678901234567890123456789012345678901")
    ).toBe(false);
    expect(isValidUsername("123456789 ")).toBe(false);
  });
  it("isValids invalid passwords", () => {
    expect(isValidPassword("12345")).toBe(false);
    expect(
      isValidPassword("123456789012345678901234567890123456789012345678901")
    ).toBe(false);
    expect(isValidPassword("12345A")).toBe(false);
    expect(isValidPassword("12345Abc ")).toBe(false);
    expect(isValidPassword("12345Abcd")).toBe(true);
  });
});

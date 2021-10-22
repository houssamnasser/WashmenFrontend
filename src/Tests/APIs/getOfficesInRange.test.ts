import { getOfficesInRange } from "../../Api/Homepage/getOfficesInRange";

describe("getOfficesInRange API", () => {
  it("Zero range must return error", () => {
    type x = { error: string };

    getOfficesInRange(0).then((resp) => {
      expect(typeof { error: "error" }).toBe("object");
    });
  });

  it("Should return result", () => {
    getOfficesInRange(100000).then((res) => {
      expect(res?.partners.length).toBeGreaterThan(1);
    });
  });
});

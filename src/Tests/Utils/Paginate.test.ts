import { Paginate } from "../../Utils/Paginate";

describe("pagination", () => {
  it("Should return 5 items per page", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = Paginate(numbers, 1, 5);
    expect(result?.length).toEqual(5);
  });
  it("Should return empty array", () => {
    const numbers = [];
    const result = Paginate(numbers, 1, 5);
    expect(result).toEqual(undefined);
  });
});

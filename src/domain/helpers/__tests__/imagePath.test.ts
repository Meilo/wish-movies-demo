import { imagePath } from "..";

describe("imagePath", () => {
  it("Should return url of image", () => {
    expect(imagePath("myImage")).toBe(
      "https://image.tmdb.org/t/p/w440_and_h660_facemyImage"
    );
  });
});

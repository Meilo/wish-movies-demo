import { renderHook, act } from "@testing-library/react-hooks";
import useWishlist from "../useWishlist";

jest.mock("ui/api/repositories");

describe("useWishlist", () => {
  it("Should add a movie in the wishlist", async () => {
    //Given
    const { result, waitForNextUpdate } = renderHook(() =>
      useWishlist(33, () => null)
    );
    //When
    act(() => {
      result.current.addMovie();
    });

    await waitForNextUpdate();
    //Then
    expect(result.current.msg).toBe("wishlist.movieAddWithSuccess");
  });
});

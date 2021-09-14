import { PresenterMethods } from "./methods/presenterMethods";

export default class Presenter implements PresenterMethods {
  showErrorMessage(msg: string) {
    return { type: "error", message: msg };
  }
  showSuccessMessage(msg: string) {
    return { type: "success", message: msg };
  }
}

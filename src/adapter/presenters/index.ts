import { PresenterMethods } from "./methods/presenterMethods";

export default class Presenter implements PresenterMethods {
  showErrorMessage(msg: string) {
    return msg;
  }
  showSuccessMessage(msg: string) {
    return msg;
  }
}

import { PresenterMethods } from "./methods/presenterMethods";

export default class Presenter<T> {
  constructor(public vm: T) {}
}

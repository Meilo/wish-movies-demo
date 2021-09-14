export interface PresenterMethods {
  showErrorMessage(msg: string): { type: string; message: string };
  showSuccessMessage(msg: string): { type: string; message: string };
}

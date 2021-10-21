import { MoviesProps } from "../types";

export default interface Controller {
  retreive(props?: MoviesProps): void;
}

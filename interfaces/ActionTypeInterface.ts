export interface ActionTypeInterface<T> {
  type: string;
  payload?: T;
}
export interface ComponentFactory<T = string> {
  create(type: T);
}
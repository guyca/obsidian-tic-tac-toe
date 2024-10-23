export interface ComponentFactory<T extends string, R> {
  create(type: T): R
}

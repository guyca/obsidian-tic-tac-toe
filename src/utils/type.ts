type NonConstructorKeys<T> = {
  [P in keyof T]: T[P] extends new () => unknown ? never : P;
}[keyof T];

export type Interface<T> = Pick<T, NonConstructorKeys<T>>;

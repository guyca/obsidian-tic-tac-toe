type NonConstructorKeys<T> = {
  [P in keyof T]: T[P] extends new () => any ? never : P;
}[keyof T];

export type Interface<T> = Pick<T, NonConstructorKeys<T>>;

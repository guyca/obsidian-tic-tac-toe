type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

export function spyOnGetter<
  T extends object,
  Key extends NonFunctionPropertyNames<T>,
>(target: T, getter: Key): jest.SpyInstance {
  // https://github.com/jestjs/jest/issues/2227#issuecomment-430435133
  Object.defineProperty(target, getter, {
    configurable: true,
    get: () => void null,
  });
  return jest.spyOn(target, getter, 'get' as any);
}

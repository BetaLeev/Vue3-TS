/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
function extend<T, U>(first: T, second: U): T & U {
  const result = <T & U>{};
  for (const id in first) {
    (<any>result)[id] = (<any>first)[id];
  }
  for (const id in second) {
    // Object.prototype.hasOwnProperty.call(foo, "bar");
    if (!Object.prototype.hasOwnProperty.call(result, "id")) {
      (<any>result)[id] = (<any>second)[id];
    }
  }
  return result;
}
function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

// yarn add moment@2.24  --registry=https://registry.npm.taobao.org

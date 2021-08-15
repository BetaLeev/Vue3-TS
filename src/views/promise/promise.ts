// export class Promise {
//   callbacks = [];
//   constructor(fn) {
//     fn(this._resolve.bind(this));
//   }
//   then(onFulfilled) {
//     if (onFulfilled) {
//       this.callbacks.push(onFulfilled);
//     }
//   }
//   _resolve(value) {
//     this.callbacks.forEach((fn) => fn(value));
//   }
// }

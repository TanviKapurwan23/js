console.log("start");

process.nextTick(() => {
  console.log("nextTick() is called");
});

setImmediate(() => {
  console.log("setImmediate() is called");
});

console.log("end");

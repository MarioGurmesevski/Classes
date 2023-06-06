import EventEmitter from "node:events";
import Events from "./events.js";

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

emitter.on(Events.event_one, () => {
  console.log("Event one triggered");
});
emitter.on(Events.event_two, () => {
  console.log("Event two triggered");
});
emitter.on(Events.event_three, () => {
  console.log("Event three triggered");
});

emitter.on("event", (message) => {
  console.log("Logged from main.js");
  console.log(message);
});

export default emitter;

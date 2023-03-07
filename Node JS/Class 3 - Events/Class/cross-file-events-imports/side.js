import emitter from "./main.js";
import Events from "./events.js";
emitter.emit("event", "Hello from the other side");

emitter.emit(Events.event_one);
emitter.emit(Events.event_two);
emitter.emit(Events.event_three);

import ev from "./events.js";

ev.on("testEvent",() =>{
    console.log("ouvi também!");
});

ev.emit("testEvent","bla bla bla");


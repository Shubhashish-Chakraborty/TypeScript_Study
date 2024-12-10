"use strict";
// Write a function which itself takes a function and run it after 1 second
function delayedCall(fnToDelay) {
    setTimeout(fnToDelay, 1000);
}
delayedCall(() => {
    console.log("Hello to the world after 1 second !");
});

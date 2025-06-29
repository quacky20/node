console.log("First task")
setTimeout(() => {
    console.log("Second task")
}, 0);
console.log("Next task")
console.log("Next task")
console.log("Next task")
console.log("Next task")

// Set timeout's callback runs only after the all the tasks, even if the timeout is 0.

// Using the event loop we are offloading the time consuming operations, making the program run faster for the small tasks.
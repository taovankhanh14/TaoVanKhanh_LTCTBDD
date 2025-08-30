"use strict";
function simulateTask2(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task done in ${time}ms`);
        }, time);
    });
}
// Chạy 3 task song song
Promise.all([
    simulateTask2(1000),
    simulateTask2(2000),
    simulateTask2(1500)
]).then((results) => {
    console.log("All tasks finished:");
    console.log(results);
    // ["Task done in 1000ms", "Task done in 2000ms", "Task done in 1500ms"]
});

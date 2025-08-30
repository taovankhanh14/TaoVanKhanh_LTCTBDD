// Function that simulates a task and resolves after given time
function simulateTask4(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}

// Async function that calls simulateTask
async function runTask() {
    const result = await simulateTask4(2000);
    console.log(result); // Task done
}

runTask();

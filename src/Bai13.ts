// Function that simulates a task and may fail
function simulateTask5(time: number, shouldFail: boolean = false): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject("Task failed!");
            } else {
                resolve("Task done");
            }
        }, time);
    });
}

// Async function using try/catch
async function runTask2() {
    try {
        const result = await simulateTask5(2000, false); 
        console.log(result);
    } catch (error) {
        console.error("Error caught:", error);
    }
}

runTask2();

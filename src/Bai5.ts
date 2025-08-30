function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}

// Cách dùng
simulateTask(2000).then((msg) => {
    console.log(msg); // "Task done" sau 2 giây
});

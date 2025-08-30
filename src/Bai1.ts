function sayHelloAsync(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000); // 2000ms = 2s
    });
}

// Cách dùng
sayHelloAsync().then((message) => {
    console.log(message); // Hello Async
});

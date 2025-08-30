// Hàm trả về Promise resolve sau 2 giây
function sayHelloAsync2(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
}

// Dùng async/await
async function run() {
    const message = await sayHelloAsync2();
    console.log(message); // Hello Async
}

run();

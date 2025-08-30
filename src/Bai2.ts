function getNumberAsync(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000); // 1s
    });
}

// Cách dùng
getNumberAsync().then((num) => {
    console.log(num); // 10
});

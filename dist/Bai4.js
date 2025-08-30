"use strict";
function getRandomNumber() {
    return new Promise((resolve, reject) => {
        const num = Math.random(); // random từ 0 -> 1
        setTimeout(() => {
            if (num > 0.3) {
                resolve(num); // thành công nếu số > 0.3
            }
            else {
                reject(new Error("Random number too small!"));
            }
        }, 1000); // giả lập bất đồng bộ (1 giây)
    });
}
// Sử dụng .then() và .catch()
getRandomNumber()
    .then((value) => {
    console.log("Success! Random number:", value);
})
    .catch((error) => {
    console.error("Error:", error.message);
});

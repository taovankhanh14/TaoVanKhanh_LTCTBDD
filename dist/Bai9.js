"use strict";
function getEvenNumbers(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evens = arr.filter((num) => num % 2 === 0);
            resolve(evens);
        }, 1000); // 1 giây
    });
}
// Cách dùng
getEvenNumbers([1, 2, 3, 4, 5, 6])
    .then((result) => {
    console.log("Even numbers:", result);
    // [2, 4, 6]
})
    .catch((err) => {
    console.error("Error:", err);
});

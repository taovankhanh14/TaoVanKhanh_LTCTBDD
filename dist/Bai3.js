"use strict";
function getErrorAsync() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000); // 1s
    });
}
// Dùng với .catch
getErrorAsync()
    .then((res) => console.log(res))
    .catch((err) => console.error("Caught error:", err.message));

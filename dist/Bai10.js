"use strict";
function randomTask2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.random();
            if (num > 0.5) {
                resolve("✅ Success! Number: " + num);
            }
            else {
                reject(new Error("Failed! Number too small: " + num));
            }
        }, 1000);
    });
}
randomTask2()
    .then((res) => console.log(res))
    .catch((err) => console.error(err.message))
    .finally(() => console.log("Done"));

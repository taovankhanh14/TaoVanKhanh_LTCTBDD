Promise.resolve(2)
    .then((num) => {
        const squared = num * num; // 2^2 = 4
        console.log("Squared:", squared);
        return squared;
    })
    .then((num) => {
        const doubled = num * 2; // 4 * 2 = 8
        console.log("Doubled:", doubled);
        return doubled;
    })
    .then((num) => {
        const result = num + 5; // 8 + 5 = 13
        console.log("Final Result:", result);
        return result;
    })
    .catch((err) => {
        console.error("Error:", err);
    });

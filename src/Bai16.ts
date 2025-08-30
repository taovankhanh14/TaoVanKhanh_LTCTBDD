// Async function: waits 1s then returns num × 3
async function tripleAfter1Sec_3(num: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 3);
    }, 1000);
  });
}

// Run multiple async calls in parallel
async function runParallel() {
  const results = await Promise.all([
    tripleAfter1Sec_3(2),
    tripleAfter1Sec_3(3),
    tripleAfter1Sec_3(4)
  ]);

  console.log("Results:", results); // [6, 9, 12]
}

runParallel();

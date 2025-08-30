// Async function: waits 1s then returns num × 3
async function tripleAfter1Sec_2(num: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 3);
    }, 1000);
  });
}

// Run multiple async calls sequentially
async function runSequential() {
  const result1 = await tripleAfter1Sec_2(2); // ~1s
  console.log("Result 1:", result1); // 6

  const result2 = await tripleAfter1Sec_2(3); // waits after result1
  console.log("Result 2:", result2); // 9

  const result3 = await tripleAfter1Sec_2(4); // waits after result2
  console.log("Result 3:", result3); // 12
}

runSequential();

// Async function: waits 1s then returns num × 3
async function tripleAfter1Sec_4(num: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 3);
    }, 1000);
  });
}

async function run_3() {
  const promises = [
    tripleAfter1Sec_4(2),
    tripleAfter1Sec_4(3),
    tripleAfter1Sec_4(4)
  ];

  // for await...of sẽ lần lượt lấy kết quả khi Promise resolve
  for await (const result of promises) {
    console.log("Result:", result);
  }
}

run_3();

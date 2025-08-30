// Function that waits 1 second and returns number × 3
async function tripleAfter1Sec(num: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 3);
    }, 1000); // waits 1 second
  });
}

// Example usage
async function run2() {
  const result = await tripleAfter1Sec(5);
  console.log(result); // 15
}

run2();

// Hàm delay
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Dùng async/await để chờ 5 giây
async function waitFiveSeconds() {
  console.log("Waiting 5 seconds...");
  await delay(5000);
  console.log("5 seconds passed!");
}

// Gọi thử
waitFiveSeconds();

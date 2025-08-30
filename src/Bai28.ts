// Hàm giả lập một task async
function simulateTask_6(id: number, time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task ${id} done after ${time}ms`);
    }, time);
  });
}

// Hàm batchProcess chạy 5 task song song
async function batchProcess() {
  const tasks = [
    simulateTask_6(1, 1000),
    simulateTask_6(2, 2000),
    simulateTask_6(3, 1500),
    simulateTask_6(4, 3000),
    simulateTask_6(5, 2500),
  ];

  const results = await Promise.all(tasks);
  console.log("All tasks finished:");
  console.log(results);
}

// Gọi thử
batchProcess();

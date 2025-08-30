// Hàm giả lập một task async
function simulateTask_7(id: number, time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task ${id} done after ${time}ms`);
    }, time);
  });
}

// Hàm xử lý tuần tự (queue)
async function queueProcess() {
  const tasks = [
    () => simulateTask_7(1, 1000),
    () => simulateTask_7(2, 2000),
    () => simulateTask_7(3, 1500),
    () => simulateTask_7(4, 3000),
    () => simulateTask_7(5, 2500),
  ];

  const results: string[] = [];

  for (const task of tasks) {
    const result = await task(); // chờ task hoàn thành mới chạy tiếp
    console.log(result);
    results.push(result);
  }

  console.log("All tasks finished (sequentially):");
  console.log(results);
}

// Gọi thử
queueProcess();

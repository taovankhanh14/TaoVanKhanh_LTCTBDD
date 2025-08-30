// fetchUser với timeout 2s
async function fetchUser_3(id: number): Promise<{ id: number; name: string }> {
  const apiCall = new Promise<{ id: number; name: string }>((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User_${id}` });
    }, 1000); // giả lập API call mất 1000ms
  });

  const timeout = new Promise<never>((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request timed out after 2s"));
    }, 2000); // Nếu timeout này trên 2000ms sẽ xuất lỗi "Error caught: Request timed out after 2s"
  });

  return Promise.race([apiCall, timeout]);
}

async function fetchUsers_2(ids: number[]): Promise<{ id: number; name: string }[]> {
  const userPromises = ids.map((id) => fetchUser_3(id));
  return Promise.all(userPromises);
}

async function run_6() {
  try {
    const users = await fetchUsers_2([1, 2, 3]);
    console.log("Fetched users:", users);
  } catch (err) {
    console.error("Error caught:", (err as Error).message);
  }
}

run_6();

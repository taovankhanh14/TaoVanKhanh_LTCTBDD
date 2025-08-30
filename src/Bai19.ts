// Reuse the fetchUser function
async function fetchUser_2(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: `User_${id}`
      });
    }, 1000); // simulate 1s API delay
  });
}

// Fetch multiple users in parallel
async function fetchUsers(ids: number[]): Promise<{ id: number; name: string }[]> {
  const userPromises = ids.map((id) => fetchUser_2(id)); // tạo mảng promise
  const users = await Promise.all(userPromises);       // chờ tất cả xong
  return users;
}

// Example usage
async function run_5() {
  const users = await fetchUsers([1, 2, 3]);
  console.log(users);
 }

run_5();

// Simulate fetching a user from API
async function fetchUser(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: `User_${id}`
      });
    }, 1000); // simulate 1s API delay
  });
}

// Example usage
async function run_4() {
  const user = await fetchUser(1);
  console.log(user); // { id: 1, name: "User_1" }
}

run_4();

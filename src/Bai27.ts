async function fetchWithRetry(url: string, retries: number): Promise<any> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(`Success on attempt ${attempt}`);
      return data;
    } catch (error) {
      console.warn(`Attempt ${attempt} failed: ${(error as Error).message}`);

      if (attempt === retries) {
        throw new Error(`Failed after ${retries} retries`);
      }
    }
  }
}
async function run_7() {
  try {
    const data = await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Final error:", (error as Error).message);
  }
}

run_7();

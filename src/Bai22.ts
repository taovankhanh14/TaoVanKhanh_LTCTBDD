async function getTodo_2(id: number) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching todo ${id}:`, (error as Error).message);
  }
}

async function getMultipleTodos() {
  const ids = [1, 2, 3, 4, 5]; // gọi 5 API
  const promises = ids.map(id => getTodo_2(id));

  const results = await Promise.all(promises);
  console.log("Todos:", results);
}

getMultipleTodos();

async function getTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Todo:", data);
  } catch (error) {
    console.error("Error fetching todo:", (error as Error).message);
  }
}

getTodo();

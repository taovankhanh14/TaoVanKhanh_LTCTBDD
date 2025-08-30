async function getCompletedTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const todos: { id: number; title: string; completed: boolean }[] = await response.json();

    // Lọc ra chỉ những todo đã completed
    const completed = todos.filter(todo => todo.completed);

    console.log("Completed Todos:", completed);
    return completed;
  } catch (error) {
    console.error("Error fetching todos:", (error as Error).message);
    return [];
  }
}

getCompletedTodos();

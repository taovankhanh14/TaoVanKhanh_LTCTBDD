async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

async function runMultipleAPIs() {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1", // OK
    "https://jsonplaceholder.typicode.com/todos/2", // OK
    "https://jsonplaceholder.typicode.com/invalid", // lỗi 404
  ];

  const results = await Promise.allSettled(urls.map(url => fetchData(url)));

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`API ${index + 1} succeeded:`, result.value);
    } else {
      console.log(`API ${index + 1} failed:`, result.reason);
    }
  });
}

runMultipleAPIs();

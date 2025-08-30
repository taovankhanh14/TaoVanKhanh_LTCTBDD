async function postData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Hello Async",
        body: "This is a test post",
        userId: 1
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response from API:", data);
    return data;
  } catch (error) {
    console.error("Error posting data:", (error as Error).message);
  }
}

postData();

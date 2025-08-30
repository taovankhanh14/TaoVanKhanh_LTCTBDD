async function downloadFile(filename: string): Promise<void> {
  return new Promise((resolve) => {
    console.log(`Starting download: ${filename}...`);
    setTimeout(() => {
      console.log(`Download complete: ${filename}`);
      resolve();
    }, 3000); // giả lập tải file mất 3s
  });
}

// Gọi thử
downloadFile("example.zip");

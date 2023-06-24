self.addEventListener("message", (event) => {
  const url = event.data;

  setInterval(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        self.postMessage(data);
      })
      .catch((error) => {
        self.postMessage({ error: error.message });
      });
  }, 2500);
});

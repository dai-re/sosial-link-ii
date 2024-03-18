const url = "https://api.github.com/repos/dai-re/sosial-link-ii";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const date = new Date(data.pushed_at);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    document.getElementById(
      "last-up"
    ).innerHTML = `last update ${year}-${month}-${day}`;
  });

const links = document.querySelectorAll('a');
const hrefs = Array.from(links).map(link => link.href);

links.forEach(link => {
  const randomIndex = Math.floor(Math.random() * hrefs.length);
  link.href = hrefs[randomIndex];
});

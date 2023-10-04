const themeFromLocalStorage = localStorage.getItem('theme');

if (themeFromLocalStorage === 'dark') {
  const html = document.getElementsByTagName("html")[0];
  html.classList.toggle(themeFromLocalStorage);
}

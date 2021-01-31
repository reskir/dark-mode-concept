const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)")?.matches;
const html = document.documentElement;
const title = document.querySelector(".title");
title.innerHTML = `Dark mode is ${isDarkMode ? "🌒 on" : "☀️ off"}.`;
console.log(title);

if (isDarkMode) {
    html.classList.add("is-dark");
} else {
    html.classList.add("is-light");
}

const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
darkModeMediaQuery.addListener((e) => {
    const darkModeOn = e.matches;
    if (darkModeOn) {
        html.classList.remove("is-light");
        html.classList.add("is-dark");
    } else {
        html.classList.remove("is-dark");
        html.classList.add("is-light");
    }
    title.innerHTML = `Dark mode is ${darkModeOn ? "🌒 on" : "☀️ off"}.`;
});

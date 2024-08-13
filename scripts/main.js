// THEME SWITCHER //
// -------------- //

// Set the root constant
const root = document.documentElement;
// Check for dark mode preference at OS level
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Get user's theme preference from local storage, if it's available
const currentTheme = localStorage.getItem("theme");
// If the user's preference in localStorage is dark...
if (currentTheme == "dark") {
    root.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
    root.classList.toggle("light-theme");
}

// Select the button with an id "theme-switch"
document.getElementById("theme-switch")
// Listen for a click on the button
    .addEventListener("click", function() {
        // If the user's OS setting is dark and matches the .dark-theme class
        if (prefersDarkScheme.matches) {
            // ...then toggle the .light-theme class
            root.classList.toggle("light-theme");
            // ...but use .dark-theme if the .light-theme class is already on the body,
            var theme = root.classList.contains("light-theme") ? "light" : "dark";
        } else {
            // Otherwise, do the same thing, but for .dark-theme
            root.classList.toggle("dark-theme");
            var theme = root.classList.contains("dark-theme") ? "dark" : "light";
        }
        // Save the current preference to localStorage
        localStorage.setItem("theme", theme);
});
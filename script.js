// var icon = document.getElementById("icon");

// icon.onclick = function() {
//     document.body.classList.toggle("dark-theme");
//     if(document.body.classList.contains("dark-theme")) {
//         icon.src = "images/sun.png";
//     } else {
//         icon.src = "images/moon.png";
//     }
// }


// Check if dark theme is preferred
const prefersDarkTheme = localStorage.getItem('prefersDarkTheme') === 'true';
const icon = document.getElementById('icon');
const body = document.body;

// Function to set the theme based on user preference
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        icon.src = 'images/sun.png';
        localStorage.setItem('prefersDarkTheme', true);
    } else {
        body.classList.remove('dark-theme');
        icon.src = 'images/moon.png';
        localStorage.setItem('prefersDarkTheme', false);
    }
}

// Toggle dark theme on icon click
icon.addEventListener('click', function() {
    if (body.classList.contains('dark-theme')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});

// On page load, set the initial theme
if (prefersDarkTheme) {
    setTheme('dark');
} else {
    setTheme('light');
}
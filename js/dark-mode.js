const darkModeToggle = document.createElement('button');
darkModeToggle.id = 'dark-mode-toggle';
darkModeToggle.className = 'btn btn-primary';
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.setAttribute('aria-label', 'Toggle Dark Mode');

// Styles for the button are in CSS, but setting some base positioning here if needed, 
// or rely entirely on CSS. For now, appending it and let CSS handle positioning.

document.body.appendChild(darkModeToggle);

// Mobile toggle in nav
const navList = document.querySelector('#sideNav .navbar-nav');
if (navList) {
    const mobileToggleLi = document.createElement('li');
    mobileToggleLi.className = 'nav-item d-lg-none'; // Only show on mobile in nav
    const mobileToggleLink = document.createElement('a');
    mobileToggleLink.className = 'nav-link js-scroll-trigger';
    mobileToggleLink.href = '#';
    mobileToggleLink.innerHTML = 'Toggle Dark Mode <i class="fas fa-moon"></i>';
    mobileToggleLink.onclick = (e) => {
        e.preventDefault();
        toggleDarkMode();
    };
    mobileToggleLi.appendChild(mobileToggleLink);
    navList.appendChild(mobileToggleLi);
}


function enableDarkMode(save = true) {
    document.body.classList.add('dark-mode');
    if (save) localStorage.setItem('theme', 'dark');
    updateIcons(true);
}

function disableDarkMode(save = true) {
    document.body.classList.remove('dark-mode');
    if (save) localStorage.setItem('theme', 'light');
    updateIcons(false);
}

function toggleDarkMode() {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

function updateIcons(isDark) {
    const iconClass = isDark ? 'fa-sun' : 'fa-moon';
    darkModeToggle.innerHTML = `<i class="fas ${iconClass}"></i>`;
    
    // Update mobile toggle icon if it exists
    const mobileLink = document.querySelector('#sideNav .navbar-nav .d-lg-none a');
    if (mobileLink) {
         mobileLink.innerHTML = `Toggle ${isDark ? 'Light' : 'Dark'} Mode <i class="fas ${iconClass}"></i>`;
    }
}

// Check system preference and local storage
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

if (savedTheme === 'dark') {
    enableDarkMode(false); // Already saved
} else if (savedTheme === 'light') {
    disableDarkMode(false); // Already saved
} else if (systemPrefersDark.matches) {
    enableDarkMode(false); // Don't save, just respect system
}

// Listen for system changes
systemPrefersDark.addEventListener('change', (e) => {
    if (e.matches) {
        enableDarkMode(false);
    } else {
        disableDarkMode(false);
    }
});

darkModeToggle.addEventListener('click', toggleDarkMode);

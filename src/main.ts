import './style.css';
import './css/toggle-theme.css';

const Themetoggle = document.querySelector('.toggle-theme') as HTMLElement;

(() => {
    const saveTheme = localStorage.getItem('theme');

    const systemPreferenceDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches;

    const isDarkTheme =
        saveTheme === 'dark ' || (!saveTheme && systemPreferenceDark);

    document.body.classList.toggle('dark-theme', isDarkTheme);

    Themetoggle.querySelector('i')!.className = isDarkTheme
        ? 'ri-sun-foggy-fill'
        : 'ri-moon-clear-line';
})();

const changeTheme = () => {
    const isDarkTheme = document.body.classList.toggle('dark-theme');

    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');

    Themetoggle.querySelector('i')!.className = isDarkTheme
        ? 'ri-sun-foggy-fill'
        : 'ri-moon-clear-line';
};

Themetoggle.addEventListener('click', changeTheme);

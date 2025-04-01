// Import styles and data
import './style.css';
import './css/toggle-theme.css';
import { examplePrompts } from './data/data';
import { componetImgCard } from './components/img-card';

// Get DOM elements
const $Themetoggle = document.querySelector('.toggle-theme') as HTMLElement;
const $promtBtn = document.querySelector('.prompt-btn') as HTMLButtonElement;
const $promptInput = document.querySelector('.prompt-input') as HTMLInputElement;
const $promptForm = document.querySelector('.prompt-form') as HTMLFormElement;

// Get select elements
const $modelSelect = document.getElementById('model-select') as HTMLSelectElement;
const $countSelect = document.getElementById('count-select') as HTMLSelectElement;
const $ratioSelect = document.getElementById('ratio-select') as HTMLSelectElement;

const gridGallery = document.querySelector('.gallery-grid') as HTMLElement;

// Initialize theme based on saved preference or system default
(() => {
    const saveTheme = localStorage.getItem('theme');

    const systemPreferenceDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches;

    const isDarkTheme =
        saveTheme === 'dark ' || (!saveTheme && systemPreferenceDark);

    document.body.classList.toggle('dark-theme', isDarkTheme);

    $Themetoggle.querySelector('i')!.className = isDarkTheme
        ? 'ri-sun-foggy-fill'
        : 'ri-moon-clear-line';
})();

// Handle theme toggle
const changeTheme = () => {
    const isDarkTheme = document.body.classList.toggle('dark-theme');

    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');

    $Themetoggle.querySelector('i')!.className = isDarkTheme
        ? 'ri-sun-foggy-fill'
        : 'ri-moon-clear-line';
};

const generateImagen = () => { }

const createImagenCard = (
    selectModdel: string,
    imagenCount: number,
    aspectRatio: string,
    pormtText: string
) => {
    gridGallery.innerHTML = '';

    for (let i = 0; i < imagenCount; i++) {
        gridGallery.innerHTML += componetImgCard(i, aspectRatio);
    }

    generateImagen(selectModdel, imagenCount, aspectRatio, pormtText);
};

// Handle form submission
const handleFormSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    const selectModdel = $modelSelect.value;
    const imagenCount = parseInt($countSelect.value) || 1;
    const aspectRatio = $ratioSelect.value || '1/1';
    const pormtText = $promptInput.value.trim();

    createImagenCard(selectModdel, imagenCount, aspectRatio, pormtText);
};

// Set random example prompt when button clicked
$promtBtn.addEventListener('click', () => {
    const prompt: string =
        examplePrompts[Math.floor(Math.random() * examplePrompts.length)];

    $promptInput.value = prompt;
    $promptInput.focus();
});

// Add event listeners
$promptForm.addEventListener('submit', handleFormSubmit);
$Themetoggle.addEventListener('click', changeTheme);

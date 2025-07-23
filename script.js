let mode = document.querySelector('.mode');
let icon = document.querySelector('.mode i');
let nav = document.querySelector('nav');

// Ensure the page starts in light mode
document.body.classList.remove('dark_mode');

mode.addEventListener('click', () => {
    nav.classList.toggle('dark_mode');

});

// Toggle mobile menu (only if there's one .bars and one .ul)
let bar = document.querySelector('.bars');
let menu = document.querySelector('.ul');

bar.addEventListener('click', () => {
    menu.classList.toggle('show_menu');
});

document.body.classList.add('dark_mode');

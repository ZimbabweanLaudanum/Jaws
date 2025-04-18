const trigger = document.getElementById('select-trigger');
const content = document.getElementById('select-content');
let isOpen = false;

trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSelect();
});

document.querySelectorAll('.select-item').forEach(item => {
    item.addEventListener('click', () => {
        trigger.querySelector('span').textContent = item.textContent;
        trigger.setAttribute('data-value', item.dataset.value);
        closeSelect();
    });
});

document.addEventListener('click', (e) => {
    if (!trigger.contains(e.target) && !content.contains(e.target)) {
        closeSelect();
    }
});

function toggleSelect() {
    isOpen = !isOpen;
    trigger.setAttribute('data-state', isOpen ? 'open' : 'closed');
    content.setAttribute('data-state', isOpen ? 'open' : 'closed');
            
    if (isOpen) {
        content.style.display = 'block';
        document.querySelector('.select-item').setAttribute('data-highlighted', '');
    } else {
        content.style.display = 'none';
        document.querySelectorAll('.select-item').forEach(item => {
            item.removeAttribute('data-highlighted');
        });
    }
}

function closeSelect() {
    isOpen = false;
    trigger.setAttribute('data-state', 'closed');
    content.setAttribute('data-state', 'closed');
    content.style.display = 'none';
}

document.addEventListener('keydown', (e) => {
    if (!isOpen) return;

    const items = Array.from(document.querySelectorAll('.select-item'));
    let currentIndex = items.findIndex(item => item.hasAttribute('data-highlighted'));

    switch(e.key) {
        case 'ArrowDown':
            e.preventDefault();
            currentIndex = (currentIndex + 1) % items.length;
            break;
        case 'ArrowUp':
            e.preventDefault();
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            break;
        case 'Enter':
            e.preventDefault();
            if (currentIndex > -1) {
                items[currentIndex].click();
            }
            return;
        case 'Escape':
            closeSelect();
            return;
        default:
            return;
    }

    items.forEach(item => item.removeAttribute('data-highlighted'));
    items[currentIndex].setAttribute('data-highlighted', '');
});
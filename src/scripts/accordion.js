document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const content = trigger.nextElementSibling;
        const isOpen = content.dataset.state === 'open';

        document.querySelectorAll('.accordion-content').forEach(item => {
            item.dataset.state = 'closed';
            item.previousElementSibling.querySelector('.accordion-icon').dataset.state = 'closed';
        });

        if (!isOpen) {
            content.dataset.state = 'open';
            trigger.querySelector('.accordion-icon').dataset.state = 'open';
        }
    });
});
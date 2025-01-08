document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease-in-out';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
    const newButton = document.querySelector('.btn-primary');
    newButton.addEventListener('click', () => {
        const grid = document.querySelector('.grid');
        const newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.innerHTML = `
            <h3>New Project</h3>
            <p>This is a newly added project card.</p>
        `;
        grid.appendChild(newCard);
        newCard.addEventListener('mouseenter', () => {
            newCard.style.transform = 'scale(1.05)';
            newCard.style.transition = 'transform 0.3s ease-in-out';
        });
        newCard.addEventListener('mouseleave', () => {
            newCard.style.transform = 'scale(1)';
        });
    });
    const menuItems = document.querySelectorAll('.sidebar ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
    const notificationButton = document.querySelector('.header-actions .btn:first-child');
    let notificationCount = 0;
    notificationButton.addEventListener('click', () => {
        notificationCount++;
        alert(`You have ${notificationCount} new notification${notificationCount > 1 ? 's' : ''}!`);
    });
});
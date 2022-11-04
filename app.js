let cards = document.querySelectorAll('.cards');

cards.forEach((cards) => {
    cards.addEventListener('click', function () {
        removeActiveClasses();
        cards.classList.add('active');
    });
});

function removeActiveClasses() {
    cards.forEach((cards) => {
        cards.classList.remove('active');
    });
}

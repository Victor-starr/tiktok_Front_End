// Top- bar buttons
const hoverElements = document.querySelectorAll('.col-chainger a');

hoverElements.forEach((element) => {
    element.addEventListener('click', () => {
        hoverElements.forEach((el) => {
            el.style.color = 'white'; 
        });
        element.style.color = '#ff3b5c'; 
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var paragraphs = document.querySelectorAll('.fol-fyr p');

    paragraphs.forEach(function (paragraph) {
        paragraph.addEventListener('click', function () {
            // Remove underline from all paragraphs
            paragraphs.forEach(function (p) {
                p.style.textDecoration = 'none';
            });

            // Add underline to the clicked paragraph
            this.style.textDecoration = 'underline white 3px';
        });
    });
});

// side video bar buttons

document.addEventListener('DOMContentLoaded', function () {
    const heartIcons = document.querySelectorAll('.fa-heart');
    const bookmarkIcons = document.querySelectorAll('.fa-bookmark');

    // Heart icon click event
    heartIcons.forEach(function (heartIcon) {
        heartIcon.addEventListener('click', function () {
            // Toggle the 'active' class for the heart icon
            heartIcon.classList.toggle('active');
        });
    });

    // Bookmark icon click event
    bookmarkIcons.forEach(function (bookmarkIcon) {
        bookmarkIcon.addEventListener('click', function () {
            // Toggle the 'active' class for the bookmark icon
            bookmarkIcon.classList.toggle('active');
        });
    });
});



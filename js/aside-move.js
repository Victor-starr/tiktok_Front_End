document.addEventListener('DOMContentLoaded', function() {
    const barsIcon = document.querySelector('.fa-bars');
    const closeIcon = document.querySelector('i.fa-close');
    const aside = document.querySelector('aside');

    barsIcon.addEventListener('click', function() {
        aside.style.left = '0px';
        barsIcon.style.opacity = '0';
        closeIcon.style.opacity = '1';
    });

    closeIcon.addEventListener('click', function() {
        aside.style.left = '-227px';
        barsIcon.style.opacity = '1';
        closeIcon.style.opacity = '0';
    });
});

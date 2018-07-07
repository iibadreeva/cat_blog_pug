(function () {
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', function () {
        const navMobile = document.querySelector('.nav--mobile');

        this.classList.toggle('active');
        navMobile.classList.toggle('active')
    });
})();
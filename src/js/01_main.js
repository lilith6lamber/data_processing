$(function () {
    AOS.init();

    window.addEventListener('load', AOS.refresh);

    $('.btn-menu').on('click', () => {
        $('.navbar_links-list--mobile').toggle('.open');
    });

    window.addEventListener('resize', changeBtn);

    changeBtn();
});

function changeBtn() {
    const login = $('.btn-login');
    const register = $('.btn-register');

    if (window.innerWidth < 992) {
        login.html(`<img src="img/sign-in.svg" alt="Sign In">`).addClass('btn-round').removeClass('btn-empty');
        register.html(`<img src="img/sign-up.svg" alt="Sign Up">`).addClass('btn-round').removeClass('btn-filled');
    } else {
        login.html(`<span>Sign in</span>`).removeClass('btn-round').addClass('btn-empty');
        register.html(`<span>Sign up</span>`).removeClass('btn-round').addClass('btn-filled');
    }
}
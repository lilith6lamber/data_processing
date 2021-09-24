const wait = (delay = 0) =>
    new Promise(resolve => setTimeout(resolve, delay));

const setVisible = (selector, visible) => {
    selector = document.getElementById(selector);
    if (visible) {
        selector.classList.add("visible");
        document.documentElement.style.overflowY = 'hidden';
    } else {
        selector.classList.remove("visible");
        document.body.classList.add("visible");
        document.documentElement.style.overflowY = 'visible';
    }
}

setVisible('loadingScreen', true);

document.addEventListener('DOMContentLoaded', () =>
    wait(1200).then(() => {
        setVisible('loadingScreen', false);
    }));

    
$(function () {
    AOS.init();

    window.addEventListener('load', AOS.refresh);

    $('body').on('click', '.btn-menu', () => {
        $('.navbar_links-list--mobile').toggle('.open');
    })

    window.addEventListener('resize', replaceBtn);

    replaceBtn();
});


function replaceBtn() {
    const btnParent = $('.user-links');

    if (window.innerWidth < 992) {
        btnParent.html(`<a href="javascript:(void)" class="btn-menu order-1">
                            <img src="img/menu.svg" alt="Menu">
                        </a>
                        <a href="javascript:(void)" class="btn btn-round">
                            <img src="img/sign-in.svg" alt="Sign Ip">
                        </a>
                        <a href="javascript:(void)" class="btn btn-round">
                            <img src="img/sign-up.svg" alt="Sign Up">
                        </a>`);
    } else {
        btnParent.html(`<a href="javascript:(void)" class="btn btn-empty"><span>Sign in</span></a>
                        <a href="javascript:(void)" class="btn btn-filled">Sign up</a>`);
    }
}
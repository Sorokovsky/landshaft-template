export function isWebp() {
    const testWebP = (callback) => {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        }
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    };

    testWebP(function (support) {
        let className = support == true ? "webp" : "no-webp";
        document.documentElement.classList.add(className);
    });
}

export function enableBurgerMenu() {
    enableToggleMobileMenu();
    enableHeaderOffset();
}

function enableToggleMobileMenu() {
    const burgerSelector = ".burger";
    const activeClass = "active";
    const mobileMenuSelector = "nav.header__mobile";
    const lockClass = "lock";
    const burger = document.querySelector(burgerSelector);
    const mobileMenu = document.querySelector(mobileMenuSelector);
    burger.addEventListener("click", event => {
        event.preventDefault();
        const { target } = event;
        document.body.classList.toggle(lockClass);
        const burgerSwitcher = target.closest(burgerSelector);
        burgerSwitcher.classList.toggle(activeClass);
        mobileMenu.classList.toggle(activeClass);
    });
}

function enableHeaderOffset() {
    addHeaderOffset();
    window.addEventListener("resize", addHeaderOffset);
}

function addHeaderOffset() {
    const headerSelector = "header.header";
    const mobileMenuSelector = "nav.header__mobile > ul";
    const header = document.querySelector(headerSelector);
    const mobileMenu = document.querySelector(mobileMenuSelector);
    const headerHeight = header.offsetHeight;
    const offsetValue = headerHeight * 2.7;
    const offset = `${offsetValue}px`;
    mobileMenu.style.paddingTop = offset;
    mobileMenu.style.paddingBottom = offset;
}
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
    const burger = document.querySelector(burgerSelector);
    burger.addEventListener("click", event => {
        event.preventDefault();
        if (burger.classList.contains(activeClass)) {
            closeMobileMenu()
        } else {
            openMobileMenu();
        }
    });
}

function openMobileMenu() {
    const burgerSelector = ".burger";
    const activeClass = "active";
    const mobileMenuSelector = "nav.header__mobile";
    const lockClass = "lock";
    const burger = document.querySelector(burgerSelector);
    const mobileMenu = document.querySelector(mobileMenuSelector);
    document.body.classList.add(lockClass);
    burger.classList.add(activeClass);
    mobileMenu.classList.add(activeClass);
}

function closeMobileMenu() {
    const burgerSelector = ".burger";
    const activeClass = "active";
    const mobileMenuSelector = "nav.header__mobile";
    const lockClass = "lock";
    const burger = document.querySelector(burgerSelector);
    const mobileMenu = document.querySelector(mobileMenuSelector);
    document.body.classList.remove(lockClass);
    burger.classList.remove(activeClass);
    mobileMenu.classList.remove(activeClass);
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

export function enableMenuScrollings() {
    const links = document.querySelectorAll(".menu a");
    links.forEach(link => {
        link.addEventListener("click", event => {
            const target = event.target.closest("a");
            const href = target.href;
            const startIndex = href.indexOf("#");
            if (startIndex !== -1) {
                event.preventDefault();
                let selector = "";
                for (let i = startIndex; i < href.length; i++) {
                    const element = href[i];
                    selector += element;
                }
                scroll(selector);
            }
        });
    });
}

function scroll(selector) {
    const headerSelector = "header.header";
    const header = document.querySelector(headerSelector);
    const headerHeight = header.offsetHeight;
    const offsetValue = headerHeight;
    let top = 0;
    let block;
    if (selector == "#") {
        block = document.body;
    } else {
        block = document.querySelector(selector);
    }
    if (block !== undefined && block !== null) {
        top = block.offsetTop - offsetValue;
        
    }
    closeMobileMenu();
    window.scroll({
        top: top,
        left: 0,
        behavior: "smooth",
    });
}
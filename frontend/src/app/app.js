class MobileNavbar {
    constructor(mobileMenu) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.menu = document.querySelector(menu);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active"
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", () => console.log ("heeyyy"));
    }
    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const MobileNavbar = new MobileNavbar (
    ".mobile-menu",
    ".menu",
    ".nav-list li",
);
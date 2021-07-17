const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const menuItems = document.querySelectorAll('.menu__item')

burger.onclick = () => {
    burger.classList.toggle("active");
    menu.classList.toggle("mob");
    document.body.classList.toggle("mob");
}
menuItems.forEach((child) => {
    child.onclick = () => {
        burger.classList.toggle("active");
        menu.classList.toggle("mob");
        document.body.classList.toggle("mob");
    }
});
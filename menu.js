const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")
const navTag = document.querySelector("nav")

// when click toggle tag = toggle class of open on main tag
// if open make toggleTag say "close" if shut make toggleTag say "menu"
toggleTag.addEventListener('click', function () {
    mainTag.classList.toggle("open")
    navTag.classList.toggle("open")

if (mainTag.classList.contains("open")) {
     toggleTag.innerHTML = `<img src="icons/close.svg"> Close`
    } else {
        toggleTag.innerHTML = `<img src="icons/menu.svg"> Menu`
    }


})

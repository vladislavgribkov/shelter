const headerBurger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger-menu');
const headerLogo = document.querySelector('.header__logo');
const burgerMenuBurger = document.querySelector('.burger-menu__items-header-burger');
const logoBurger = document.querySelector('.burger-menu__items-header_logo');

logoBurger.addEventListener('click',()=>{
    document.location.href = "../main/index.html";
});

headerBurger.addEventListener('click',()=>{
    headerBurger.style.transition = '1s';
    headerBurger.style.transform = 'rotate(90deg)';
    document.body.style.overflow = 'hidden';
    burgerMenu.style.display = 'flex';
    setTimeout(()=>{
        burgerMenuBurger.style.transform = 'rotate(90deg)';
        burgerMenu.children[0].style.left = '0';
       setTimeout(()=>{
        headerBurger.style.display = 'none';
        headerLogo.style.display = 'none';
       },200);
    }, 100);
   
});

burgerMenuBurger.addEventListener('click',()=>{
    burgerMenuBurger.style.transform = 'rotate(0)';
    burgerMenu.children[0].style.left = '320px';
    document.body.style.overflow = 'auto';
    setTimeout(()=>{
        headerBurger.style.transform = 'rotate(15deg)';
        headerBurger.style.display = 'block';
        headerLogo.style.display = 'block';
       setTimeout(()=>{
        headerBurger.style.transform = 'rotate(0)';
        headerBurger.style.transition = '0.1s'
        burgerMenu.style.display = 'none';
       },100);
    }, 600);
   
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('burger-menu')  || event.target.closest('burger-menu__items')){
        burgerMenuBurger.style.transform = 'rotate(0)';
        burgerMenu.children[0].style.left = '320px';
        document.body.style.overflow = 'auto';
        setTimeout(()=>{
            headerBurger.style.transform = 'rotate(15deg)';
            headerBurger.style.display = 'block';
            headerLogo.style.display = 'block';
           setTimeout(()=>{
            headerBurger.style.transform = 'rotate(0)';
            headerBurger.style.transition = '0.1s'
            burgerMenu.style.display = 'none';
           },100);
        }, 600);
    }
});

window.onresize = function() {
    document.location.reload();
};



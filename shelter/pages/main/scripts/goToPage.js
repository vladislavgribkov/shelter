const buttonTitle = document.querySelector('.not-only__content_title-btn');
const buttonFriend = document.querySelector('.our-friend__content_btn');
const logo = document.querySelector('.header__logo');

buttonTitle.addEventListener('click', ()=>{
    document.location.href = "../pets/index.html";
});

buttonFriend.addEventListener('click', ()=>{
    document.location.href = "../pets/index.html";
});
logo.addEventListener('click', ()=>{
    document.location.href = "../main/index.html";
});

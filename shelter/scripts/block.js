let block = () => {
    let list = document.querySelectorAll('.header__nav_list-item a');
    let list1 = document.querySelectorAll('.burger__nav_list-item a');
    list[2].style.pointerEvents = 'none';
    list[3].style.pointerEvents = 'none';
    list1[2].style.pointerEvents = 'none';
    list1[3].style.pointerEvents = 'none';
}
block();
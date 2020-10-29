const contentItems = document.querySelector('.our-friend__content_items');
const contentNext = document.querySelector('.next');
const contentPrevious = document.querySelector('.previous');
const contentStart = document.querySelector('.start');
const contentEnd = document.querySelector('.end');
const activeButton  = document.querySelector('.our-friend__content_controls-items-item_active');

let pagesCount = 1;
let maxPages;
let array = [];
let newArray = [];
function getNewArray(maxPages){
    for(let i = 0; i < 6; i++){
        newArray.push(...contentItems.children);
    }
    let count = newArray.length/maxPages;
    for(let i = 0; i < maxPages; i++){
        let a = newArray.splice(0, count);
        if(i===0){
            array.push(shuffleArray(a))
        }else{
            array.push(shuffleArray(a));
        }
    }
}

if(document.documentElement.clientWidth > 1279){
    maxPages = 6;
}

if(document.documentElement.clientWidth > 767 && document.documentElement.clientWidth < 1279){
    maxPages = 8;
}
if(document.documentElement.clientWidth < 768){
    maxPages = 16;
}

getNewArray(maxPages);


//getNewArray(maxPages);
getNextOrPreviousPages();
contentNext.addEventListener('click', ()=>{
    ++pagesCount;
    if(pagesCount > 1){
        contentPrevious.disabled = false;
        contentPrevious.classList.remove('our-friend__content_controls-items-item_disabled');
        contentStart.disabled = false;
        contentStart.classList.remove('our-friend__content_controls-items-item_disabled');
    }
    if(pagesCount === maxPages){
        contentNext.disabled = true;
        contentNext.classList.add('our-friend__content_controls-items-item_disabled');
        contentEnd.disabled = true;
        contentEnd.classList.add('our-friend__content_controls-items-item_disabled');
    }
    activeButton.textContent = `${pagesCount}`;
    getNextOrPreviousPages();
});

contentPrevious.addEventListener('click', ()=>{
    --pagesCount;
    if(pagesCount < 2){
        contentPrevious.disabled = true;
        contentPrevious.classList.add('our-friend__content_controls-items-item_disabled');
        contentStart.disabled = true;
        contentStart.classList.add('our-friend__content_controls-items-item_disabled');
    }
    if(pagesCount === maxPages-1){
        contentNext.disabled = false;
        contentNext.classList.remove('our-friend__content_controls-items-item_disabled');
        contentEnd.disabled = false;
        contentEnd.classList.remove('our-friend__content_controls-items-item_disabled');
    }
    activeButton.textContent = `${pagesCount}`;
    getNextOrPreviousPages();
});

contentEnd.addEventListener('click', ()=>{
    pagesCount = maxPages;
    if(pagesCount > 1){
        contentPrevious.disabled = false;
        contentPrevious.classList.remove('our-friend__content_controls-items-item_disabled');
        contentStart.disabled = false;
        contentStart.classList.remove('our-friend__content_controls-items-item_disabled');
    }
    if(pagesCount === maxPages){
        contentNext.disabled = true;
        contentNext.classList.add('our-friend__content_controls-items-item_disabled');
        contentEnd.disabled = true;
        contentEnd.classList.add('our-friend__content_controls-items-item_disabled');
    }
    activeButton.textContent = `${pagesCount}`;
    getNextOrPreviousPages();
});

contentStart.addEventListener('click', ()=>{
    pagesCount = 1;
    if(pagesCount < 2){
        contentPrevious.disabled = true;
        contentPrevious.classList.add('our-friend__content_controls-items-item_disabled');
        contentStart.disabled = true;
        contentStart.classList.add('our-friend__content_controls-items-item_disabled');
    }
    if(pagesCount === 1){
        contentNext.disabled = false;
        contentNext.classList.remove('our-friend__content_controls-items-item_disabled');
        contentEnd.disabled = false;
        contentEnd.classList.remove('our-friend__content_controls-items-item_disabled');
    }
    activeButton.textContent = `${pagesCount}`;
    getNextOrPreviousPages();
});

function getNextOrPreviousPages(){
    array.filter((element, index)=>{
        if(index === pagesCount-1){
            contentItems.style.opacity = '0';
            contentItems.style.transition = 'opacity 0.5s';
            setTimeout(()=>{
                contentItems.innerHTML = '';
                element.forEach(el =>{
                    contentItems.append(el);
                    contentItems.style.opacity = '1';
                });
            },400);
        }
    });
}
// function getNewArray(maxPages){
//     array.push([...contentItems.children]);
//     for(let i = 0; i < maxPages-1; i++){
//         array.push(shuffleArray([...contentItems.children]));
//     }
// }
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
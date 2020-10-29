const slider = document.querySelector('.our-friend__content_items');
const leftController = document.querySelector('.our-friend__content_controls-left');
const rightController = document.querySelector('.our-friend__content_controls-right');

if(document.documentElement.clientWidth > 1279){
    slider.style.columnGap = '90px';
}

slider.style.overflow =  'hidden';

pets.map(element => {
    let item = document.createElement('div');
    let img = document.createElement('img');
    let h6 = document.createElement('h6');
    let button = document.createElement('button');

    item.className = 'our-friend__content_items-item';
    h6.className = 'our-friend__content_items-item_title';
    button.className = 'btn our-friend__content_items-item_btn';

    slider.appendChild(item);
    item.appendChild(img);
    item.appendChild(h6);
    item.appendChild(button);

    img.setAttribute('src',`${element.img}`);
    item.setAttribute('alt','image');
    h6.innerText = `${element.name}`;
    button.innerText = 'Learn more';
});
let count;
if(document.documentElement.clientWidth > 1279){
    count = 3;
}

if(document.documentElement.clientWidth > 767 && document.documentElement.clientWidth < 1279){
    count = 2;
}
if(document.documentElement.clientWidth < 768){
    count = 1;
}

leftController.addEventListener('click', ()=>{
    getItems(count);
});

rightController.addEventListener('click', ()=>{
    getItems(count);
});

let itemSlider;
let arrSlider = [...slider.children];
let firstItems = arrSlider.splice(0,count);
let arrayItemsSlider = shuffleArray([...arrSlider]);

function opacity(){
    slider.style.opacity = '0';
    slider.style.transition = 'opacity 0.7s';
}

function getItems(count){
    opacity();
    setTimeout(()=>{
        slider.innerHTML = '';
        slider.style.opacity = '1';
        arrayItemsSlider.push(...firstItems);
        firstItems = [];
        itemSlider = arrayItemsSlider.splice(0,count);
        for(let i = 0; i < count; i++){
            slider.append(itemSlider[i]);
        }
        shuffleArray(arrayItemsSlider);
        arrayItemsSlider.push(...itemSlider);   
    },700)
        
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
window.onresize = function() {
    document.location.reload();
};

const buttonOurFriendContent = document.querySelectorAll('.our-friend__content_items-item');
const popupCloseButton = document.querySelector('.popup__content_button');
const popup = document.querySelector('.popup');

class Popup{
    constructor(namePet){
       this.block =  document.querySelector('.popup');
       this.namePet = namePet;
    }

    addBlock(){
       pets.forEach(element => {
           if(element.name === this.namePet){
                this.block.style.display = 'flex';
                document.querySelector('body').style.overflow = 'hidden';
                document.querySelector('.popup__content_title-content_title').textContent = `${element.name}`;
                document.querySelector('.popup__content_title-content_subtitle').textContent = `${element.type} - ${element.breed}`;
                document.querySelector('.popup__content_title-content_text').textContent = `${element.description}`;
                document.querySelector('.Age').textContent = `${element.age}`;
                document.querySelector('.Inoculations').textContent = `${element.inoculations}`;
                document.querySelector('.Diseases').textContent = `${element.diseases}`;
                document.querySelector('.Parasites').textContent = `${element.parasites}`;
                if(document.documentElement.clientWidth > 767){
                    document.querySelector('.popup__content_title-img').setAttribute('src',`${element.img}`);
                }else{
                    let t = document.querySelector('.popup__content_title-img');
                    if(t!==null){
                        t.remove();
                    }
                }
            }
       })
    }
    removeBlock(){
        document.querySelector('body').style.overflow = 'auto';
        this.block.style.display = 'none';
    }
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup') || event.target.classList.contains('popup__content')
      || event.target.closest('.popup__content_button')){
        new Popup().removeBlock();
    }
});

document.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('popup') || event.target.classList.contains('popup__content')
    || event.target.closest('.popup__content_button')){
        let button = document.querySelector('.popup__content_button.btn');
        button.style.background = '#F1CDB3';
        button.style.border = '2px solid #F1CDB3';
  }
});

document.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('popup') || event.target.classList.contains('popup__content')
    || event.target.closest('.popup__content_button')){
        let button = document.querySelector('.popup__content_button.btn');
        button.style.background = '';
        button.style.border = '';
  }
});

buttonOurFriendContent.forEach(element=>{
    element.addEventListener('click',()=>{
        let block = element.closest('.our-friend__content_items-item');
        new Popup(block.children[1].textContent).addBlock();
    })
});
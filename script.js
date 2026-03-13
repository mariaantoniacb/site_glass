// Menu hamburguer

// function clickMenu(){
//     var menu = document.getElementById('menu')
//     menu.style.display = 'block'
//     if(menu.style.display == 'block' ){
//         menu.style.display = 'none'
//     }else {
//         menu.style.display = 'block'
//     }
// }







//  pag inicial - seção "Designers para ficar de olho"

const container = document.getElementById("designersCards");
const btnLeft = document.querySelector(".button-scroll.left");
const btnRight = document.querySelector(".button-scroll.right");

container.innerHTML += container.innerHTML;

let scrollSpeed = 0.5;
let position = 0;
let autoscroll = true;

btnRight.addEventListener("click", () => {
    autoscroll = false;
    container.scrollLeft += 300;
    position = container.scrollLeft;

    setTimeout(() => {
        autoscroll = true;
    }, 2000);
});

btnLeft.addEventListener("click", () => {
    autoscroll = false;
    container.scrollLeft -= 300;
    position = container.scrollLeft;

    setTimeout(() => {
        autoscroll = true;
    }, 2000);
});





function infiniteScroll() {
   
    if (autoscroll) {
    position += scrollSpeed;
    container.scrollLeft = position;
    }
   


    if (position >= container.scrollWidth / 2) {
        position = 0;
        container.scrollLeft = 0;
    }

    requestAnimationFrame(infiniteScroll);
}

infiniteScroll();
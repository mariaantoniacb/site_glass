const container = document.getElementById("designersCards");
const btnLeft = document.querySelector(".button-scroll.left");
const btnRight = document.querySelector(".button-scroll.right");
 


btnRight.addEventListener("click", () => {
    container.scrollLeft += 300;
});

btnLeft.addEventListener("click", () => {
    container.scrollLeft -= 300;
});

container.innerHTML += container.innerHTML;

let scrollSpeed = 0.5;
let position = 0;

function infiniteScroll() {
    position += scrollSpeed;
    container.scrollLeft = position;


    if (position >= container.scrollWidth / 2) {
        position = 0;
        container.scrollLeft = 0;
    }

    requestAnimationFrame(infiniteScroll);
}

infiniteScroll(); 
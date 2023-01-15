let squares = document.querySelectorAll(".square");

squares.forEach(item => {
    item.addEventListener("click", rotate);
});

let rotation = 30;

function rotate(){

    squares.forEach(item => {
        item.style.transform = `rotate(${rotation}deg)`;
        rotation += 30;
    });
}

let interval = setInterval(rotate, 10);
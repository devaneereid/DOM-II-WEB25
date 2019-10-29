// Your code goes here



// Resize
const travelImg = document.querySelector("img");
window.addEventListener("resize", () => {
    travelImg.src="https://images.unsplash.com/photo-1526857240824-92be52581d9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
});


// Click
const clickTest = document.querySelector(".text-content");

clickTest.addEventListener('click', (event) => {
    clickTest.style.backgroundColor = "#FF0080";

    console.log(event);
    event.stopPropagation();
});

document.querySelectorAll(".nav").forEach(el => {
    el.addEventListener("click", () => {
        el.style.color="FF0080";
    })
});


// Double Click
const changeImg = document.querySelector(":nth-child(2) > div.img-content > img");
changeImg.addEventListener("dblclick", () => {
    changeImg.src = "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
});


// KeyDown
const body = document.querySelector('body');
body.addEventListener('keydown', (event) => {
    body.style.backgroundColor="#f0d2fc";
})

// KeyUp
body.addEventListener('keyup', (event) => {
    body.style.backgroundColor="#afe0d3";
})

// Mouseover
const navOver = document.querySelector(".main-navigation");
navOver.addEventListener("mouseenter", (e) => {
    e.target.style.color = "aqua";

    setTimeout(() => {
        event.target.style.color = "pink";
    }, 500);
}, false);

navOver.addEventListener("mouseover", (e) => {
    event.target.style.color = "#66a4b3";

    setTimeout(() => {
        event.target.style.color = "purple";
    }, 1000);
}, false);


// GreenSock Image Twirl 360
TweenMax.to('body > div > section.content-destination > img', 1, {
    rotation: -360,
    x: -100,
    y: 50,
    ease: Elastic.easeOut.config(1, 0.75)
});

// Added GreenSock Title Jump
TweenMax.to("body > div > header > h2", 2, {
    y: -100,
    ease: Elastic.easeOut.config(1, 0.3),
    yoyo: true,
    repeat: -1
});


// Mouse Event
const newDes = document.querySelector('body > div > header > p');
newDes.addEventListener('mouseenter', () => {
    newDes.style.fontWeight = 'bold';
    newDes.textContent= "Take Your Vacation Today!";
})


// Removed Last Button 
var removeObj = document.querySelector("section.content-pick > div:nth-child(3) > div");
removeObj.style.display = 'none';





// Wheel  - extra element (not working yet)
wheelTest(e => {
    var text = document.getElementById('.body');

    if (e.deltaY < 0) {
        text.innerHTML = 'Scrolling Up ⬆️';
    }
    else if (e.deltaY < 0) {
        text.innerHTML = 'Scrolling Down ⬇️';
    }
})
window.addEventListener('mousewheel', wheelTest, false);
window.addEventListener('wheel', wheelTest, false);


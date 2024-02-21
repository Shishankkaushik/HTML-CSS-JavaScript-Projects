let flag = 0;
function Controller(x){
    flag = flag + x;
    SlideShow(flag);
}
SlideShow(flag);

function SlideShow(num){
    let Slides = document.getElementsByClassName('slide');

    if(num == Slides.length){
        flag = 0;
        num = 0;
    }
    if(num < 0){
        flag = Slides.length - 1;
        num = Slides.length - 1;
    }
    for(let y of Slides){
        y.style.display = "none";
    }
    // console.log(num);
    Slides[num].style.display = "block"; 
}
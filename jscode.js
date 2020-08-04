let eyeball = document.getElementsByClassName("eyeballs");

console.log(eyeball);

document.onmousemove = function(){
    var x = event.clientX * 100 / window.innerWidth + "%"; 
    var y = event.clientY * 100 / window.innerHeight + "%";
    console.log(x,y);
    for (i = 0; i < 2; i++) {
        eyeball[i].style.left = x;
        eyeball[i].style.top = y;
        eyeball[i].style.transform = "translate(-" + x + ", -" + y +")";
    }
}



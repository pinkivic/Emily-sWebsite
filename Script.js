window.addEventListener('scroll', revealElement);
window.addEventListener('scroll', revealElementRight);
window.addEventListener('scroll', revealElementLeft);
revealElement()
function revealElement(){
    var reveals = document.querySelectorAll('.reveal')
    var REVEAL_POINT = 250;
    for(var i = 0 ; i < reveals.length ; i++){
        var windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;

        if( revealtop < windowHeight - REVEAL_POINT ){
            reveals[i].classList.add('active')
        }
        else{
            reveals[i].classList.remove('active')
        }
    }
}

function revealElementRight(){
    var reveals = document.querySelectorAll('.revealRight')
    var REVEAL_POINT = 250;
    for(var i = 0 ; i < reveals.length ; i++){
        var windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;

        if( revealtop < windowHeight - REVEAL_POINT ){
            reveals[i].classList.add('active')
        }
        else{
            reveals[i].classList.remove('active')
        }
    }
}

function revealElementLeft(){
    var reveals = document.querySelectorAll('.revealLeft')
    var REVEAL_POINT = 250;
    for(var i = 0 ; i < reveals.length ; i++){
        var windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;

        if( revealtop < windowHeight - REVEAL_POINT ){
            reveals[i].classList.add('active')
        }
        else{
            reveals[i].classList.remove('active')
        }
    }
}
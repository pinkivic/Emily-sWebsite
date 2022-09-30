window.addEventListener('scroll', revealElement);

function revealElement(){
    var reveals = document.querySelectorAll('.reveal')
    var REVEAL_POINT = 150;
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
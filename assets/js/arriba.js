function irArriba(){
    window.addEventListener('scroll', ()=>{
        var botonsillo = document.getElementById('btn-arriba');
        var topsillo = document.documentElement.scrollTop;
       // console.log("El scroll actual es de: " + topsillo);

        if(topsillo > 250){
            botonsillo.style.right = 7 + 'px';
        }else{
            botonsillo.style.right = -100 + 'px';
        }
    });
}

irArriba();

function scrolly(){
    window.scrollTo(0, 0);
}
let link = document.querySelectorAll(".close");

link.forEach(function(links){
links.addEventListener("click",function(ev){
//    ev.preventDefault();

    let content_games = document.querySelector(".content_games");

    content_games.classList.remove("animate__animated");
    content_games.classList.remove("animate__pulse");
    content_games.classList.add("animate__animated");
    content_games.classList.add("animate__headShake");
    
    setTimeout(function(){
       // window.close();
        location.href= "../index.html";
    },1000);

    return false;
});

});

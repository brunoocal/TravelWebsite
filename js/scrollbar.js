let progress = document.getElementById('progressbar');
let progressbackground = document.getElementById('progressbackground');
window.onscroll = function(){
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    
    if(progressHeight > 40){
        progressbackground.style.background = "rgba(0, 0, 0, 0.6)";
        progress.style.background = "black";
    }else{
        progressbackground.style.background = "rgba(255, 255, 255, 0.2)"
        progress.style.background = "white";
    }

    progress.style.height = progressHeight + "%";
}
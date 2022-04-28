let MyMusic = new Audio("./music.mp3");
let back_btn = document.getElementById("back_btn");
let play_btn = document.getElementById("play_btn");
let pauses_btn = document.getElementById("pauses_btn");
let forward_btn = document.getElementById("forward_btn");
let full_time = document.getElementById("full_time");
let cr_time = document.getElementById("cr_time");
let timer = document.getElementById("timer");
let volum = document.getElementById("volum");
let cover = document.getElementById("cover");
let cursol = document.getElementById("cursol");
volum.value = 0.5;
volum.style.background = "linear-gradient(90deg, rgba(230,126,34,1) 50%, #e1e1e1 0%)";
MyMusic.volume = 0.5;
play_btn.addEventListener("click",function () {
    MyMusic.play();
    this.classList.remove("flex");
    this.classList.add("hidden");
    
    pauses_btn.classList.remove("hidden");
    pauses_btn.classList.add("flex");

    full_time.innerHTML = getTime(MyMusic.duration);
    cursol.classList.add("rotate-[25deg]");
    cover.classList.add("animate-c");
});
pauses_btn.addEventListener("click",function () {
    MyMusic.pause();
    this.classList.remove("flex");
    this.classList.add("hidden");
    
    play_btn.classList.remove("hidden");
    play_btn.classList.add("flex");
    
    cursol.classList.remove("rotate-[25deg]");
    cover.classList.remove("animate-c")
});
back_btn.addEventListener("click",() =>  MyMusic.currentTime = MyMusic.currentTime - 5);
forward_btn.addEventListener("click",() =>  MyMusic.currentTime =  MyMusic.currentTime + 5);
MyMusic.addEventListener("timeupdate",() => {
    cr_time.innerHTML = getTime(MyMusic.currentTime);
    let bar = (MyMusic.currentTime / MyMusic.duration) * 100;
    timer.value = bar;
    timer.style.background = `linear-gradient(90deg, rgba(230,126,34,1) ${bar}%, #e1e1e1 0%)`;
});
timer.addEventListener("input",function () { 
    MyMusic.currentTime = (this.value / 100) * MyMusic.duration;
});
volum.addEventListener("input",function () { 
    MyMusic.volume = this.value;
    this.style.background = `linear-gradient(90deg, rgba(230,126,34,1) ${this.value * 100}%, #e1e1e1 0%)`;

});
function getTime(user_time) {
    let min = Math.floor(user_time / 60);
    let se = Math.floor(user_time - (min * 60));
    if (min < 10) {
        min = "0" + min;
    }
    if (se < 10) {
        se = "0" + se;
    }
    return min + ":" + se;
}
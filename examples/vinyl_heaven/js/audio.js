function play(id) {
    document.getElementById(id).play();
}
function pause(id) {
    document.getElementById(id).pause();
}
function volumeIncrease(id) {
    document.getElementById(id).volume+=0.2;
}
function volumeDecrease(id) {
    document.getElementById(id).volume-=0.2;
}
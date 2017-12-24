var beat1 = new Howl({
    src: ['audio/christmas-beat.mp3'],
    loop: true
});
var beat2 = new Howl({
    src: ['audio/rap-beat.mp3'],
    loop: true
});

var hohoho = new Howl({src: ['audio/hohoho.mp3']});
var you = new Howl({src: ['audio/you.mp3']});



let beatOn = false;
function playBeat(beatId) {
    if(beatOn) {
        window[beatId].stop()
        beatOn = false;
        return;
    }
    window[beatId].play()
    beatOn = true;
}

function playSound(name) {
    window[name].play();
}
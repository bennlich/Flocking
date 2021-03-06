// Triggers the playback of a sound file from the beginning
// every time the user clicks the mouse.

flock.synth({
    synthDef: {
        ugen: "flock.ugen.playBuffer",
        buffer: {
            id: "chord",
            url: "../shared/audio/hillier-first-chord.wav"
        },

        trigger: {
            ugen: "flock.ugen.mouse.click"
        }
    }
});

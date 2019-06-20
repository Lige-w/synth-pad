class Audio {
    static context = new (window.AudioContext || window.webkitAudioContext)()

    static masterGainNode = Audio.context.createGain()
}

export default Audio
var noteSoundPaths = ['0-A3.mp3', '1-Bb3.mp3', '2-B3.mp3', '3-C3.mp3', '4-Db3.mp3', '5-D3.mp3', '6-Eb3.mp3', '7-E3.mp3', '8-F3.mp3', '9-Gb3.mp3', '10-G3.mp3', '11-Ab3.mp3']
var noteSounds = []

var intervalOptions = ['-2', '+2', '-3', '+3', 'P4', 'Tritone', 'P5', '-6', '+6', '-7', '+7', 'P8']
var intervalSemitones = {'-2': 1,
                        '+2': 2,
                        '-3': 3,
                        '+3': 4,
                        'P4': 5,
                        'Tritone': 6,
                        'P5': 7,
                        '-6': 8,
                        '+6': 9,
                        '-7': 10,
                        '+7': 11,
                        'P8': 12}

var currentInterval
var guess

function initaliseNoteSounds() {
    var i = 0
    while(i<35) {
    noteSounds.push(new Audio(`....\\assets\\piano-note-sounds\\${noteSoundPaths[i]}`))
    console.log(`....\\assets\\piano-note-sounds\\${noteSoundPaths[i]}`)
    i++
    }
};

function choseInterval() {
    var interval = intervalOptions[Math.floor(Math.random()*intervalOptions.length)]
    var intervalDistance = intervalSemitones[interval]
    var startingNote = Math.random() * (noteSoundPaths.length-(intervalDistance+1) - 0) + 0
    
    // interval, staring note index, ending note index
    return (interval, startingNote, startingNote+intervalDistance)
};


function playNote(index) {
    console.log('playing')
    noteSounds[index].play()
}

function submitGuess(submittedGuess) {
    console.log(`Guess: ${guess}`)
    guess = submittedGuess
}

function mainQuiz() {
    while(true) {
        currentInterval = choseInterval()
        if(guess == currentInterval[0]) {
            console.log('Guess correct')
            results_text = document.getElementById("results_text")
            results_text.textContent = 'Correct!'
        }

    }
}

document.getElementById("play_interval_button").addEventListener("click", function() {
    playNote(currentInterval[1])
    playNote(currentInterval[2])
});

document.getElementsByClassName("interval-guess-button").addEventListener("click", function())


initaliseNoteSounds()

// audio.play();
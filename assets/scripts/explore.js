// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    
    const voiceSelect = document.getElementById('voice-select');
    const synth = window.speechSynthesis;

    let voices = [];

    function populateVoiceList() {
        voices = synth.getVoices();
        for(let i = 0; i < voices.length; i++) {
            const option = document.createElement('option');
            option.textContent = `${voices[i].name} (${voices[i].lang})`;
            if (voices[i].default) {
                option.textContent += " — DEFAULT";
            }
            option.setAttribute('data-lang', voices[i].lang);
            option.setAttribute('data-name', voices[i].name);
            voiceSelect.appendChild(option);
        }
    }
    
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }
    const textToSpeak = document.getElementById('text-to-speak');
    const playButton = document.querySelector('button');
    const faceImage = document.querySelector('#explore img');
    playButton.addEventListener('click', () => {
        const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
        const voice = voices.find(voice => voice.name === selectedOption);
        
        if (voice) {
            const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
            utterance.voice = voice;
            utterance.onstart = function() {
                faceImage.src = 'assets/images/smiling-open.png';
            };
            utterance.onend = function() {
                faceImage.src = 'assets/images/smiling.png';
            };
            synth.speak(utterance);
        }
    });
}

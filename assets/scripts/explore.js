// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const voiceSelect = document.getElementById('voice-select');
    const textArea = document.getElementById('text-to-speak');
    const speakButton = document.querySelector('button');
    const faceImage = document.querySelector('#explore img');
    const synth = window.speechSynthesis;

    let voices = [];

    function populateVoiceList() {
        voices = synth.getVoices();
        for(let i = 0; i < voices.length; i++) {
            const option = document.createElement('option');
            option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
            option.setAttribute('data-lang', voices[i].lang);
            option.setAttribute('data-name', voices[i].name);
            voiceSelect.appendChild(option);
        }
    }
    
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    speakButton.addEventListener('click', () => {
        const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
        const voice = voices.find(voice => voice.name === selectedOption);
        
        if (voice) {
            const utterance = new SpeechSynthesisUtterance(textArea.value);
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

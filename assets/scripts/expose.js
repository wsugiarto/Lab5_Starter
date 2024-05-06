// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    
    const hornSelect = document.getElementById('horn-select');
    const audioElement = document.querySelector('audio');
    const hornImage = document.querySelector('#expose img');
    

    hornSelect.addEventListener('change', function() {
        const hornValue = this.value;
        switch (hornValue) {
            case 'air-horn':
                hornImage.src = 'assets/images/air-horn.svg';
                audioElement.src = 'assets/audio/air-horn.mp3';
                break;
            case 'car-horn':
                hornImage.src = 'assets/images/car-horn.svg';
                audioElement.src = 'assets/audio/car-horn.mp3';
                break;
            case 'party-horn':
                hornImage.src = 'assets/images/party-horn.svg';
                audioElement.src = 'assets/audio/party-horn.mp3';
                break;
        }
    });
    
    const volumeIcon = document.querySelector('#volume-controls img');
    const volumeSlider = document.getElementById('volume');
    volumeSlider.addEventListener('input', function() {
        const volumeValue = parseInt(this.value);
        audioElement.volume = volumeValue / 100;
        
        if (volumeValue === 0) {
            volumeIcon.src = 'assets/icons/volume-level-0.svg';
        } else if (volumeValue < 33) {
            volumeIcon.src = 'assets/icons/volume-level-1.svg';
        } else if (volumeValue < 67) {
            volumeIcon.src = 'assets/icons/volume-level-2.svg';
        } else {
            volumeIcon.src = 'assets/icons/volume-level-3.svg';
        }
    });
    
    
    const jsConfetti = new JSConfetti();
    const playButton = document.querySelector('button');
    playButton.addEventListener('click', function() {
        if (hornSelect.value === 'party-horn') {
            jsConfetti.addConfetti();
        }
        audioElement.play();
    });
}

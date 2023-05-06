// Create an oscillator
const oscillator = audioContext.createOscillator();
oscillator.type = "sine"; // Set the waveform type
oscillator.frequency.setValueAtTime(220, audioContext.currentTime); // Set the frequency to 220 Hz A#

// Create a gain node to control the volume
const gainNode = audioContext.createGain({ gain: 0.5 }); // Set the initial gain to 0.5

// Connect the oscillator to the gain node, and the gain node to the audio context
oscillator.connect(gainNode).connect(audioContext.destination);

// Start the oscillator
oscillator.start();

// Stop the oscillator after 2 seconds
setTimeout(() => {
  oscillator.stop();
}, 2000);

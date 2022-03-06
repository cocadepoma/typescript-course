(() => {
  enum AudioLevel {
    min = 1,
    medium,
    max = 10
  };

  let currentAudioLevel = AudioLevel.min;
  console.log(currentAudioLevel);
  console.log(AudioLevel)
})();
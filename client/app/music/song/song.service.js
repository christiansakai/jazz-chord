'use strict';

angular.module('jazzChordApp')
  .factory('song', song)

song.$inject = ['musicChords']

function song(musicChords) {

  var song = [];
  var beats = 4;
  var tempo = 120;

  return {
    addMeasure: addMeasure,
    beats: beats,
    deleteMeasure: deleteMeasure,
    song: song,
    tempo: tempo
    }

  function addMeasure(note, beats) {
    var type = 'M-triad';
    var measure = [];

    for (var i = 0; i < beats; i++) {
      var beat = musicChords.buildChord(note, type);
      measure.push(beat);
    }

    song.push(measure);
  }

  function deleteMeasure(index) {
    song.splice(index, 1);
  }
}



// SongQueue.js - Defines a backbone collection class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('add', function () {
      if( this.length === 1 ) {
        this.playFirst();
      }
    });

    this.on('ended', function () {
      this.remove(this.at(0));
      if ( this.length > 0 ) {
        this.playFirst();
      }
    });


  },
  // Only play if it is the first item in the SongQueue collection
  playFirst: function() {
    this.at(0).play();
  }


});

// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagname: "table",

  initialize: function() {
    this.collection.on('add remove', function () {
      this.render();
    }, this);

    this.render();
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
    // return this.$el;
  }

});

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function() {
    var room = _.template(`
      <div class="room">
        <div class="roomname"></div>
        <div> id="rooms"</div>
      </div>
    `);
    this.$select.append(room);

  }

};

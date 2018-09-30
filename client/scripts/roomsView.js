var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(roomName) {
    var room = _.template(`
      <option>${roomName}</option>
    `);
    RoomsView.$select.append(room);

  },

  handleAdd: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    const roomtext = $('#roomName').val();
    console.log('roomtext: ', roomtext);
    if (!Rooms.roomList.has(roomtext)) {
      RoomsView.renderRoom(roomtext);
    }
    Rooms.add(roomtext);
  },
  
  filter: function(roomName) {
    var selectRoom = _.filter(Messages.storage, function() { return Messages.roomname === roomName; });
    $('#chats').html('');
    //select the div that contains everything with id chats.html('')
  }
};

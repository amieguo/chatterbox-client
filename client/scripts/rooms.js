var Rooms = {
  roomList: new Set,
  
  add: function(newRoom) {
    Rooms.roomList.add(newRoom);
    console.log('We added the new room ', newRoom);
  }
};
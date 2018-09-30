var Rooms = {
  roomList: new Set,
  currentRoom: 'smth',
  
  add: function(newRoom) {
    Rooms.roomList.add(newRoom);
    console.log('We added the new room ', newRoom);
  }
};
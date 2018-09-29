var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  roomname: 'smth', // fill this in 

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    
    // var messagesArr = App.fetch();
    // console.log(App.fetch());
    // var allMessages = '';
    
    // fix this to be able to display all the messages
    
    $(".username").on( "click", Friends.toggleStatus); 
    $('#rooms').on( "click", Rooms.add); 
    // how do we actually submit message    
    //$('form .submit').on( "submit", Parse.create; 
  },


  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      for (var i = 0; i < data.results.length; i++) {
        console.log(data.results[i]);
        MessagesView.renderMessage(data.results[i]);
      }
      callback();  
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

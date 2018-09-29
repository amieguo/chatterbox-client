var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    const msgtext = $('#message').val();
    var message = {
      username: App.username,
      text: msgtext,
      roomname: App.roomname
    };

    Parse.create(message);
    // Parse.create(message, App.fetch.call(null, function(){console.log("lalala");}));
    //App.fetch();
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
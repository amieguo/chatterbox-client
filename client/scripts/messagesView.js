var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    App.fetch(function (data) {
      
      for (var i = 0; i < data.length; i++) {
        MessagesView.renderMessage(data[i]);
      }
    });
  },

  renderMessage: function(s) {
    var chat = _.template(`
      <div class="chat">
        <div href="#" class="username usernameButton" add-as-friend = "this.toggleStatus">username</div>
      </div>
    `);
    this.$chats.append(chat);
  }

};
var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    
  },

  renderMessage: function() {
    var chat = _.template(`
      <div class="chat">
        <div href="#" class="username usernameButton" add-as-friend = "this.toggleStatus">username</div>
      </div>
    `);
    this.$chats.append(chat);
  }

};
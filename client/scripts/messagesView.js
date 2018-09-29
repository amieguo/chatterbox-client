var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // App.fetch(function (data) {
    //   console.log('data length', data);
    //   for (var i = 0; i < data.length; i++) {
    //     console.log('msgviewdata: ', data);
    //     MessagesView.renderMessage(data[i]);
    //   }
    // });
  },

  renderMessage: function(messageObj) {
    var ESC_MAP = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };

    var escapeHTML = function(s, forAttribute) {
      if (s !== undefined) {
        return s.replace(forAttribute ? /[&<>'"]/g : /[&<>]/g, function(c) {
          return ESC_MAP[c];
        });
      } 
    };

    var messageText = escapeHTML(messageObj.text);
    var user = escapeHTML(messageObj.username);
    var chat = _.template(`
      <div class="chat">
        <div href="#" class="username usernameButton" add-as-friend = "this.toggleStatus">${user}: ${messageText}</div>
      </div>
    `);
    this.$chats.append(chat);
  }

};
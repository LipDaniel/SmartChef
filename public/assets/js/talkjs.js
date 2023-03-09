

Talk.ready.then(function () {
  var me = new Talk.User({
      id: $('#iduser').val(),
      name:  $('#username').val(),
      email: $('#email').val(),
      photoUrl: 'https://i.pinimg.com/originals/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg',
  });
  window.talkSession = new Talk.Session({
      appId: 'tJWi2r3j',
      me: me,
  });
  var other = new Talk.User({
      id: '123456',
      name: 'Admin',
      email: 'alice@example.com',
      photoUrl: 'https://static.vecteezy.com/system/resources/previews/000/364/628/non_2x/vector-chef-avatar-illustration.jpg',
      welcomeMessage: 'Hey, how can I help?',
  });

  var conversation = talkSession.getOrCreateConversation(
      Talk.oneOnOneId(me, other)
  );
  conversation.setParticipant(me);
  conversation.setParticipant(other);

  const popup = talkSession.createPopup();
  popup.select(conversation);
  popup.mount({ show: false });
  
  const button = document.getElementById('btn-getInTouch');
  button.addEventListener('click', (event) => {
    event.preventDefault();
    popup.show();
  });
  
});
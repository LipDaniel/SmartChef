Talk.ready.then(function () {
    var me = new Talk.User({
      id: '123456',
      name: 'Admin',
      email: 'alice@example.com',
      photoUrl: 'https://static.vecteezy.com/system/resources/previews/000/364/628/non_2x/vector-chef-avatar-illustration.jpg',
      welcomeMessage: 'Hey, how can I help?',
    });
    window.talkSession = new Talk.Session({
      appId: 'tJWi2r3j',
      me: me,
    });
    var other = new Talk.User({
      id: '10',
      name: 'Nhân',
      email: 'Sebastian@example.com',
      photoUrl: 'https://talkjs.com/images/avatar-5.jpg',
      welcomeMessage: 'Hey there! How are you? :-)',
    });
  
    var conversation = talkSession.getOrCreateConversation(
      Talk.oneOnOneId(me, other)
    );
    conversation.setParticipant(me);
    conversation.setParticipant(other);
  
    var inbox = talkSession.createInbox({ selected: conversation });
    inbox.mount(document.getElementById('talkjs-container'));
});
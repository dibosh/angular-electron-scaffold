/* global faker:false _:false */
angular.module('myApp', [])
.constant('faker', faker);

angular.module('myApp')
.controller('BaseController', BaseController);

angular.module('myApp')
.controller('LoginController', LoginController);


angular.module('myApp')
.controller('MessengerController', MessengerController);

function BaseController() {
  this.loginView = './src/login.html';
  this.messengerView = './src/messenger.html';
  this.isLoggedIn = true;
}

function LoginController() {
  // login should go here
}

function MessengerController(faker) {
  this.chats = [];
  for (var i = 0; i < 10; i++) {
    this.chats.push({
      person: {
        name: faker.name.findName(),
        avatar: faker.image.avatar()
      },
      textSnippet: faker.lorem.text()
    });
  }
}
